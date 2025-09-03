# vCard QR Code Generator

A simple desktop application for generating vCard QR codes.

This application provides a user-friendly interface to create QR codes containing your contact information (vCard). You can then scan the QR code with a mobile device to easily add the contact to your address book.

## Features

-   Generate vCard QR codes from a simple form.
-   Customize the QR code color.
-   Add a logo to the center of the QR code.
-   Cross-platform (Windows, macOS, Linux).

## Screenshot

![Screenshot of the application](screenshot.png)

*(A screenshot of the application would be placed here)*

## Usage

1.  **Prerequisites:** Make sure you have [Node.js](https.nodejs.org/) installed.

2.  **Installation:** Open your terminal or command prompt and run the following commands:

    ```bash
    # Clone the repository
    git clone https://github.com/randomdize/vcard-qrcode-generator.git

    # Navigate to the project directory
    cd vcard-qrcode-generator

    # Install the dependencies
    npm install
    ```

3.  **Running the application:**

    ```bash
    npm start
    ```

    This will launch the application window.

4.  **Generating a QR Code:**

    -   Fill in the desired contact information in the form.
    -   (Optional) Select a logo to display in the middle of the QR code.
    -   Click the "Generate" button.
    -   The QR code will be displayed at the bottom of the window.
    -   Right-click on the QR code to save it as an image.

## Dependencies

-   [Electron](https://www.electronjs.org/)
-   [Photon](https://photonkit.com/)
-   [qrcode](https://github.com/soldair/node-qrcode)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.