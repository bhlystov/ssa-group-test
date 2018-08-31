export const filter = {
    filters: {
        upperCase: function (value) {
            if (!value) return '';
            return value.toString().toUpperCase();
        }
    }
};