# vCard QR Code Generator

A simple and secure desktop application built with Electron for generating vCard QR codes.

This application provides an intuitive interface to create QR codes containing contact information formatted as vCard 3.0. Scan the generated QR code with any mobile device camera or scanner to quickly add contact details to your address book.

## Features

- **vCard 3.0 Generation**: Create complete vCard QR codes (Name, Organization, Title, Phone, Fax, Address, Email, Website).
- **Custom Styling**: Customize QR code module colors.
- **Secure Architecture**: Built with context isolation, process sandboxing, and strict Content Security Policy (CSP).
- **Reproducible Dev Environment**: Built-in Nix shell (`shell.nix`) pinned with `npins` for consistent setup across systems, with optional `direnv` support.
- **Cross-Platform**: Runs on macOS, Windows, and Linux.

## Getting Started

### Option 1: Using Nix (Recommended)

This project includes a Nix development environment managed via [`npins`](https://github.com/andir/npins) to pin Nix packages deterministically.

1. **Enter the Nix Shell**:
   ```bash
   nix-shell
   ```
   *Alternatively, if you use [`direnv`](https://direnv.net/), run `direnv allow` once to automatically activate the environment whenever you enter the directory.*

2. **Install Dependencies & Run**:
   ```bash
   npm install
   npm start
   ```

### Option 2: Standard Setup (Node.js)

1. **Prerequisites**: Ensure [Node.js](https://nodejs.org/) (and npm) is installed on your system.

2. **Installation**:
   ```bash
   # Clone the repository
   git clone https://github.com/randomdize/vcard-qrcode-generator.git

   # Navigate to the project directory
   cd vcard-qrcode-generator

   # Install dependencies
   npm install
   ```

3. **Running the Application**:
   ```bash
   npm start
   ```

## Usage

1. Fill in the contact details in the form.
2. Set the desired QR code color (hex format).
3. Click **Generate**.
4. The QR code will render on the right panel.

## Dependencies & Tools

- [Electron](https://www.electronjs.org/)
- [Bootstrap 5](https://getbootstrap.com/)
- [qrcode](https://github.com/soldair/node-qrcode)
- [Nix](https://nixos.org/) & [npins](https://github.com/andir/npins) for reproducible development environments

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.