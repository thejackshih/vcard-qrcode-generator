# This shell provides a development environment for the vcard-qrcode-generator project.
# To use it, run 'nix-shell' in the project root.

with import <nixpkgs> {};

let
  # Use the latest stable Node.js available in nixpkgs.
  nodejs = pkgs.nodejs;

  # Use the latest stable Electron available in nixpkgs.
  electron = pkgs.electron;

in
pkgs.mkShell {
  # The build inputs are the packages available in the shell.
  buildInputs = [
    # Node.js and npm
    nodejs

    # System libraries required by Electron.
    electron

    # Common tools for building native Node modules, just in case.
    pkgs.python3
    pkgs.gnumake
    pkgs.gcc
  ];

  # A hook to provide instructions when the shell is entered.
  shellHook = ''
    echo "Entered development environment for vcard-qrcode-generator."
    echo ""
    echo "Next steps:"
    echo "  1. Run 'npm install' to get the node packages."
    echo "  2. Run 'npm start' to run the application."
  '';
}
