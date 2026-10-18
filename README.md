<div align="center">

# Sumcoin Paper Wallet Generator

### Open-source, client-side cryptocurrency paper wallet generation

[![Website](https://img.shields.io/badge/Live%20Application-PaperWallet-16a34a?style=for-the-badge)](https://paperwallet.sumcoinindex.com/)
[![GitHub Release](https://img.shields.io/github/v/release/sumcoinlabs/WalletGenerator.net?style=for-the-badge)](https://github.com/sumcoinlabs/WalletGenerator.net/releases/latest)
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](#license-and-attribution)
[![Open Source](https://img.shields.io/badge/Source-Open-orange?style=for-the-badge)](https://github.com/sumcoinlabs/WalletGenerator.net)

**Generate · Print · Store securely**

[Launch PaperWallet](https://paperwallet.sumcoinindex.com/) ·
[Download Latest Release](https://github.com/sumcoinlabs/WalletGenerator.net/releases/latest) ·
[View Source](https://github.com/sumcoinlabs/WalletGenerator.net)

![Paper wallet preview](images/overview.png)

</div>

---

## Overview

Sumcoin Paper Wallet Generator is a browser-based, open-source
application for generating cryptocurrency addresses, private keys,
QR codes, and printable paper wallets.

This repository is the Sumcoin Labs version of the
WalletGenerator.net project, with Sumcoin support and compatibility
updates.

The application can be downloaded and run locally without a server.
For generating wallets intended to hold valuable funds, using a
verified offline copy is preferable to generating them on a live website.

**Official application:** https://paperwallet.sumcoinindex.com/

## Features

- Client-side wallet and key generation
- Sumcoin support enabled by default
- Printable paper wallets with QR codes
- Single-wallet generation
- Bulk address generation
- Wallet details and key inspection
- Additional cryptocurrency support
- Multiple interface languages
- Source code available for inspection and offline use
- Browser cryptographic randomness through `crypto.getRandomValues`

Some features, including brain wallets and user-provided passphrases,
carry additional security risks. Avoid predictable or reused passphrases.

## Sumcoin compatibility

The default Sumcoin settings are designed to match the legacy address
and private-key formats used by the Sumcoin Flutter wallet.

| Property | Format |
| --- | --- |
| Network | Sumcoin |
| Address type | Legacy P2PKH |
| Address prefix | `S` |
| Default public keys | Compressed |
| Default WIF prefix | `U` |
| Address network version | `0x3f` |
| Private-key WIF version | `0xbb` |

Uncompressed Sumcoin addresses and WIF keys are also supported where
the receiving or importing wallet accepts them.

**Important:** Paper wallets contain private keys controlling funds.
Always verify wallet compatibility and perform a small-value recovery
test before relying on a generated wallet.

## Download and run offline

**Recommended download:**

[Latest GitHub release](https://github.com/sumcoinlabs/WalletGenerator.net/releases/latest)

1. Download the release ZIP file from this repository.
2. Verify its SHA-256 checksum against the accompanying checksum file.
3. Extract the complete archive.
4. Disconnect from the internet for wallet generation.
5. Open the extracted `index.html` in a compatible browser.
6. Generate and print your wallet securely.

Keep the extracted image, logo, and other asset directories alongside
`index.html`; do not move only the HTML file.

Alternatively, download the repository directly:

[Download master source archive](https://github.com/sumcoinlabs/WalletGenerator.net/archive/refs/heads/master.zip)

The release archive provides a fixed version, whereas the master
archive changes as development continues.

## Security considerations

**Treat generated private keys as highly sensitive.**

- Use a trusted device and an up-to-date browser.
- Prefer a downloaded, inspected, offline copy.
- Verify download integrity using the published checksum.
- Do not share, photograph, or upload private keys.
- Keep printed keys away from unauthorized people and cameras.
- Never use an untrusted printer or an exposed print queue.
- Protect against fire, water damage, theft, and accidental disposal.
- Test recovery before transferring significant amounts.
- Never assume a paper wallet is a substitute for a thoroughly
  audited hardware wallet.

Cryptographic randomness requires a browser environment that
supports the Web Crypto API. If suitable randomness is unavailable,
do not attempt to generate keys.

**Security notice:** This software is provided without warranty.
It has not been represented here as independently security-audited.
Use at your own risk.

## Application structure

| Path | Purpose |
| --- | --- |
| `index.html` | Standalone production HTML application |
| `src/` | Editable application source |
| `images/` | Interface and paper-wallet graphics |
| `logos/` | Cryptocurrency logos |
| `l10n/` | Language resources |
| `sitemap.xml` | Canonical application sitemap |
| `robots.txt` | Search-engine discovery instructions |

The production `index.html` contains bundled JavaScript and styling.
The source and asset directories are retained to make the project
inspectable and maintainable.

## Verification and development

Changes to wallet-generation behavior should be tested carefully,
especially:

- Sumcoin address encoding
- Compressed and uncompressed WIF formats
- Private-key import and export
- Cryptographic randomness
- QR code output
- Compatibility with Sumcoin wallet implementations

The source project includes historical build tooling. Review its
dependencies before running or upgrading the build process.

## Source, issues, and contributions

**Repository:** https://github.com/sumcoinlabs/WalletGenerator.net

**Issue tracker:** https://github.com/sumcoinlabs/WalletGenerator.net/issues

**Releases:** https://github.com/sumcoinlabs/WalletGenerator.net/releases

Contributions and reproducible bug reports are welcome.

When reporting wallet problems, never post actual funded private keys,
seed phrases, or sensitive wallet backups.

## Project history

This project is derived from the original
[WalletGenerator.net](https://github.com/MichaelMure/WalletGenerator.net)
application.

The Sumcoin Labs version maintains Sumcoin-specific functionality,
including compressed legacy address and private-key compatibility.

The original project and its contributors retain their respective
copyright notices and attribution.

## License and attribution

The original WalletGenerator.net software is distributed under the
MIT License, as stated in its accompanying source notices.

Copyright (c) 2014 WalletGenerator.net.

Portions of the bundled software use additional licenses, including
BSD, MIT, Apache License 2.0, and public-domain components.

Consult the source files and embedded notices for the applicable
copyright and licensing terms.

The original WalletGenerator.net name and logo are not covered by
the original software's MIT grant.

This software is provided **AS IS**, without warranties of any kind,
including merchantability, fitness for a particular purpose, or
noninfringement.

---

<div align="center">

**Sumcoin Paper Wallet Generator**

[Website](https://paperwallet.sumcoinindex.com/) ·
[GitHub](https://github.com/sumcoinlabs/WalletGenerator.net) ·
[Releases](https://github.com/sumcoinlabs/WalletGenerator.net/releases)

</div>
