const handleSubmit = (e) => {
  e.preventDefault();

  emailjs.send("service_i8bhhs6", "template_3prw7bm",
    {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    },
    "your_public_key_here"
  )

    .then(
      () => {
        alert("✅ Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      },
      (error) => {
        console.error("Email error:", error);
        alert("❌ Failed to send message. Try again later.");
      }
    );
};
