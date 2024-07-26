import { ref, reactive, computed } from "vue";
import isCyrillic from "../utils/isCyrillic";
import isValidEmailValue from "../utils/emailValidator";
import isCyrillicAndNumber from "../utils/isCyrillicAndNumber";

export function useFormData() {
  interface IErrorsMessage {
    name?: string;
    surname?: string;
    position?: string;
    subject?: string;
    message?: string;
    email?: string;
    country?: string;
    index?: string;
    address?: string;
    city?: string;
    phone?: string;
  }

  const form = reactive({
    name: "",
    surname: "",
    position: "",
    role: "customer",
    subject: "",
    message: "",
    email: "",
    country: "",
    index: "",
    address: "",
    city: "",
    phone: "38 ",
  });

  const errorsMessage = ref(<IErrorsMessage>{});

  const isValidName = computed(() => {
    return {
      alias: "name",
      value: form.name,
      valid: isCyrillic(form.name),
      errors: function () {
        if (!form.name) return "заповніть обов'язкове поле";
        if (!this.valid) return "тільки кирилиця";

        return false;
      },
    };
  });

  const isValidSurname = computed(() => {
    return {
      alias: "surname",
      value: form.surname,
      valid: isCyrillic(form.surname),
      errors: function () {
        if (!form.name) return "заповніть обов'язкове поле";
        if (!this.valid) return "тільки кирилиця";

        return false;
      },
    };
  });

  const isValidEmail = computed(() => {
    return {
      alias: "email",
      value: form.email,
      valid: isValidEmailValue(form.email),
      errors: function () {
        if (!form.email) return "заповніть обов'язкове поле";
        if (!this.valid) return "тільки кирилиця";

        return false;
      },
    };
  });

  const isValidSubject = computed(() => {
    return {
      alias: "subject",
      value: form.subject,
      valid: isCyrillic(form.subject),
      errors: function () {
        if (!this.value) return "заповніть обов'язкове поле";
        if (!this.valid) return "invalid";

        return false;
      },
    };
  });

  const isValidРhone = computed(() => {
    return {
      alias: "phone",
      value: form.phone,
      valid: form.phone.replace(/\D/g, "").length === 12,
      errors: function () {
        if (!this.value) return "заповніть обов'язкове поле";
        if (!this.valid) return "некоректний номер телефону";

        return false;
      },
    };
  });

  const isValidCity = computed(() => {
    return {
      alias: "city",
      value: form.city,
      valid: isCyrillic(form.city),
      errors: function () {
        if (!this.value) return false;
        if (!this.valid) return "тільки кирилиця";

        return false;
      },
    };
  });

  const isValidCountry = computed(() => {
    return {
      alias: "country",
      value: form.country,
      valid: isCyrillic(form.country),
      errors: function () {
        if (!this.value) return false;
        if (!this.valid) return "тільки кирилиця";

        return false;
      },
    };
  });

  const isValidAddress = computed(() => {
    return {
      alias: "address",
      value: form.address,
      valid: isCyrillicAndNumber(form.address),
      errors: function () {
        if (!this.value) return false;
        if (!this.valid) return "тільки кирилиця";
      },
    };
  });

  const isValidMessage = computed(() => {
    return {
      alias: "message",
      value: form.message,
      valid: isCyrillicAndNumber(form.message),
      errors: function () {
        if (!this.value) return false;
        if (!this.valid) return "тільки кирилиця";
      },
    };
  });

  return {
    form,
    errorsMessage,
    isValidMessage,
    isValidSurname,
    isValidAddress,
    isValidCountry,
    isValidCity,
    isValidРhone,
    isValidSubject,
    isValidEmail,
    isValidName,
  };
}
