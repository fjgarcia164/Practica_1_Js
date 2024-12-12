export class UIDrag {
    static init(dropSelector, dragSelector) {
        // Manejar eventos para las zonas donde se pueden soltar las cartas
        document.querySelectorAll(dropSelector).forEach((item) => {
            item.addEventListener("drop", (event) => {
                event.preventDefault();
                const data = JSON.parse(event.dataTransfer.getData("text"));
                const draggedElement = document.getElementById(data.id);

                // Evitar que las cartas se suelten fuera de la zona
                if (item !== draggedElement.parentNode) {
                    item.appendChild(draggedElement);
                }

                draggedElement.style.position = 'relative'; // Hacer que la carta se quede en su lugar correcto
                draggedElement.style.left = '0';
                draggedElement.style.top = '0';
            });

            item.addEventListener("dragover", (event) => {
                event.preventDefault();  // Necesario para permitir el "drop"
            });
        });

        // Manejar el inicio del arrastre
        document.querySelectorAll(dragSelector).forEach((item) => {
            item.addEventListener("dragstart", (event) => {
                const sendData = {
                    id: event.target.id
                };
                event.dataTransfer.setData("text", JSON.stringify(sendData));
            });
        });
    }
}
