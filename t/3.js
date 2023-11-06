function calcularPromedioNotas(estudiantes) {
    const prom = [];
    estudiantes.forEach((estudiante) => {
      const suma = estudiante.notas.reduce((a, b) => a + b);
      const prom = suma / estudiante.notas.length;
      prom.push({
        nombre: estudiante.nombre,prom: prom,
      });
    });
    return prom;
  }