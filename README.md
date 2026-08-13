# vCard QR Code Generator

A simple and secure desktop application built with Electron for generating vCard QR codes.

This application provides an intuitive interface to create QR codes containing contact information formatted as vCard 3.0. Scan the generated QR code with any mobile device camera or scanner to quickly add contact details to your address book.

## Features

- **vCard 3.0 Generation**: Create complete vCard QR codes (Name, Organization, Title, Phone, Fax, Address, Email, Website).
- **Custom Styling**: Customize QR code module colors.
- **Secure Architecture**: Built with context isolation, process sandboxing, and strict Content Security Policy (CSP).
- **Cross-Platform**: Runs on macOS, Windows, and Linux.

## Usage

1. **Prerequisites**: Make sure you have [Node.js](https://nodejs.org/) installed.

2. **Installation**: Open your terminal and run:

    ```bash
    # Clone the repository
    git clone https://github.com/randomdize/vcard-qrcode-generator.git

    # Navigate to the project directory
    cd vcard-qrcode-generator

    # Install dependencies
    npm install
    ```

3. **Running the application**:

    ```bash
    npm start
    ```

4. **Generating a QR Code**:

    - Fill in the contact details in the form.
    - Set the desired QR code color (hex format).
    - Click **Generate**.
    - The QR code will render on the right panel.

## Dependencies

- [Electron](https://www.electronjs.org/)
- [Bootstrap 5](https://getbootstrap.com/)
- [qrcode](https://github.com/soldair/node-qrcode)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.