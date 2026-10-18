/*
 * Cryptographically secure random-number generator.
 * Requires browser Web Crypto. Never falls back to
 * insecure random-number generators or user input.
 *
 * Legacy seed functions are retained for UI compatibility
 * only. They do not affect cryptographic key generation.
 */
(function () {
    function SecureRandom() {}

    SecureRandom.prototype.nextBytes = function (bytes) {
        if (!window.crypto ||
            typeof window.crypto.getRandomValues !== "function" ||
            typeof Uint8Array === "undefined") {
            throw new Error(
                "Secure randomness unavailable. Wallet generation disabled."
            );
        }

        if (!bytes || typeof bytes.length !== "number" ||
            !Number.isSafeInteger(bytes.length) ||
            bytes.length < 0) {
            throw new TypeError("Invalid random byte array");
        }

        // Web Crypto limits each request to 65,536 bytes.
        // Generate in chunks and never reuse random output.
        for (var offset = 0; offset < bytes.length; offset += 65536) {
            var length = Math.min(65536, bytes.length - offset);
            var result = new Uint8Array(length);

            // Propagate errors. Never silently weaken security.
            window.crypto.getRandomValues(result);

            for (var i = 0; i < length; i++) {
                bytes[offset + i] = result[i];
            }
        }
    };

    // Kept for compatibility with the existing mouse/keyboard UI.
    // This pool is display-only and is NEVER used for key generation.
    SecureRandom.poolSize = 256;
    SecureRandom.pool = new Array(256).fill(0);
    SecureRandom.pptr = 0;

    SecureRandom.seedInt8 = function (value) {
        SecureRandom.pool[SecureRandom.pptr] ^= (value & 255);
        SecureRandom.pptr =
            (SecureRandom.pptr + 1) % SecureRandom.poolSize;
    };

    SecureRandom.seedInt16 = function (value) {
        SecureRandom.seedInt8(value);
        SecureRandom.seedInt8(value >>> 8);
    };

    SecureRandom.seedInt = function (value) {
        for (var i = 0; i < 4; i++) {
            SecureRandom.seedInt8(value >>> (i * 8));
        }
    };

    SecureRandom.seedTime = function () {
        SecureRandom.seedInt(Date.now());
    };

    // Fail immediately during loading if secure RNG is unavailable.
    // Also recheck on every request in nextBytes().
    if (!window.crypto ||
        typeof window.crypto.getRandomValues !== "function") {
        throw new Error(
            "Secure randomness unavailable. Wallet generation disabled."
        );
    }

    window.SecureRandom = SecureRandom;
})();
