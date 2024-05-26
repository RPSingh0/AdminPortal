export function getNumberOfPages(elements, pageSize) {
    return Math.ceil(elements / pageSize);
}

export function getDataForPage(data, pageNumber) {
    const from = pageNumber * 6;
    const to = from + 6;
    return data.slice(from, to);
}

export function generateFormData(form) {
    const formData = new FormData(form);
    return Object.fromEntries(formData.entries());
}

export function validatePassword(pwd) {
    const errors = [];

    if (pwd.length < 8) {
        errors.push('Password must be at least 8 characters long.');
    }
    if (!/[A-Z]/.test(pwd)) {
        errors.push('Password must contain at least one uppercase letter.');
    }
    if (!/[@#$%]/.test(pwd)) {
        errors.push('Password must contain at least one of the symbols @, #, $, %.');
    }

    return errors;
}

export function validateMobileNumber(mobileNumber) {
    const errors = [];

    if (mobileNumber.length !== 10) {
        errors.push('Mobile number should be of 10 digits');
    }

    if (!/^[0-9]+$/.test(mobileNumber)) {
        errors.push('Please provide a valid mobile number');
    }

    return errors;
}

export function validateUserName(userName) {
    const errors = [];

    if (userName.length < 5) {
        errors.push('Username must be more then 5 characters long.');
    }
    if (!/\d/.test(userName)) {
        errors.push('Username must contain at least one number.');
    }

    return errors;
}

export function validateLink(link) {
    const errors = [];

   try {
       new URL(link);
   } catch (_) {
       errors.push('Please enter a valid url');
   }

    return errors;
}

export function validateLength(input, minLength, maxLength = null) {
    const errors = [];
    const length = input.length;

    if (length < minLength) {
        errors.push(`Please enter minimum ${minLength} characters.`);
    }

    if (maxLength !== null && length > maxLength) {
        errors.push(`Input should not be more then ${maxLength} characters.`);
    }

    return errors;
}

export function validateTagName(tagName, allowedTagName) {
    const errors = [];

    if (!allowedTagName.includes(tagName)) {
        errors.push(`Please select from available options: ${allowedTagName.join(', ')}`);
    }

    return errors;
}

export function formHasErrors(errors) {
    const containsError = Object.values(errors).map((value) => {
        return value && value.length > 0
    });

    return containsError.includes(true);
}