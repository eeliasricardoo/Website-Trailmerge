import { toast as uiToast } from "studiocms:ui/components/toaster/client";
async function formListener(event, form, type, toast = uiToast, reload = () => {
  if (typeof window !== "undefined") {
    window.location.reload();
  }
}) {
  event.preventDefault();
  if (type === "register") {
    const password = form.querySelector('input[name="password"]');
    const confirmPassword = form.querySelector(
      'input[name="confirm-password"]'
    );
    if (password.value !== confirmPassword.value) {
      toast({
        title: "Passwords do not match!",
        type: "danger",
        description: "Please make sure your passwords match.",
        closeButton: true,
        persistent: true
      });
      return;
    }
  }
  const response = await fetch(form.action, {
    method: form.method,
    body: new FormData(form)
  });
  if (response.ok) {
    toast({
      title: `${type === "login" ? "Login" : "Registration"} successful!`,
      type: "success",
      description: "Redirecting..."
    });
    reload();
  } else {
    const {
      error: { title, description }
    } = await response.json();
    toast({
      title,
      type: "danger",
      description,
      closeButton: true,
      persistent: true
    });
  }
}
export {
  formListener
};
