// peticion a la API de contacto
document
  .getElementById("formAction")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    const formData = new FormData(this);
    const data = Object.fromEntries(formData.entries());

    Swal.fire({
      title: "Enviando...",
      text: "Por favor, espera mientras enviamos tu mensage.",
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading(); 
      },
    });

    try {
      const res = await fetch("/contactanos/email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        Swal.fire({
          title: "¡Correo enviado!",
          icon: "success",
          confirmButtonText: "Aceptar",
        });
        this.reset();
      } else {
        const errorData = await res.json();
        console.error("Error en la respuesta:", errorData);
        Swal.fire({
          title: "Error",
          text: "No se pudo enviar el mensaje. Inténtalo nuevamente.",
          icon: "error",
          confirmButtonText: "Aceptar",
        });
      }
    } catch (err) {
      console.error("Error al conectar con el servidor:", err);
      Swal.fire({
        title: "Error de conexión",
        text: "No se pudo conectar con el servidor. Verifica tu conexión a internet.",
        icon: "error",
        confirmButtonText: "Aceptar",
      });
    }
  });


  
