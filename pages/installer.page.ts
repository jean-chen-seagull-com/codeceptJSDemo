class InstallerPrinter {
    private locators = {
        nextButton: "//Button[@Name='Next >']",
        finishButton: "//Button[@Name='Finish']",

    }

    get nextButton() {
        return this.locators.nextButton;
    }

    get finishButton() {
        return this.locators.finishButton;
    }
}
export default new InstallerPrinter();