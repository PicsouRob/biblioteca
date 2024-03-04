export const convertDate = (value: string): string => {
    const date = new Date(value);
    const day = date.getUTCDate();
    const week = date.getDay();
    const month = date.getMonth();
    const year = date.getFullYear();

    const weeks: string[] = ["Domingo",
        "Lunes",
        "Martes",
        "Miércoles",
        "Jueves",
        "Viernes",
        "Sábado"
    ]
  
    const months: string[] = [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre"
    ];
  
    const fullDate = `${weeks[week + 1]} ${day} de ${months[month]} ${year}`;
    
    return fullDate;
};