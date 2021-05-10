
export const typeAlert = {
    SUCCESS: 'success',
    INFO: 'info',
    WARN: 'warn',
    ERROR: 'error',
};
export class AlertHelper {
    static dropDown;
    static onClose;

    static setDropDown(dropDown) {
        this.dropDown = dropDown;
    }

    static show(type, title, message) {
        if (this.dropDown) {
            this.dropDown.alertWithType(type, title, message);
        }
    }

    static setOnClose(onClose) {
        this.onClose = onClose;
    }

    static invokeOnClose() {
        if (typeof this.onClose === 'function') {
            this.onClose();
        }
    }
}
export function showAlert(type: string, title: string, description: string) {
    AlertHelper.show(type,title,description)
}
