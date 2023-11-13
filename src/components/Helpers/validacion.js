export const validate = {
    edad : {
        required: true,
        min: 14,
        max: 99,
        minLength: 2,
        maxLength: 2
    },
    sexo : {
        required: true,
        minLength: 1,
        maxLength: 1,
        min: 1,
        max: 2
    },
    p1 : {
        required: true,
        minLength: 1,
        maxLength: 1,
        min: 1,
        max: 2
    },
    p2 : {
        required: true,
        minLength: 1,
        maxLength: 1,
        min: 1,
        max: 3
    },
    p3 : {
        required: true,
        minLength: 1,
        maxLength: 2,
        min: 1,
        max: 10
    },
    p4 : {
        required: true,
        minLength: 1,
        maxLength: 1,
        min: 1,
        max: 3
    },
    p5 : {
        required: true,
        minLength: 1,
        maxLength: 1,
        min: 1,
        max: 4
    },
    p6 : {
        required: true,
        minLength: 1,
        maxLength: 1,
        min: 1,
        max: 5
    },
    p7 : {
        required: true,
        minLength: 1,
        maxLength: 3,
        min: 1,
        max: 432
    },
    p8 : {
        required: true,
        minLength: 1,
        maxLength: 1,
        min: 1,
        max: 3
    },
    p9 : {
        required: true,
        minLength: 1,
        maxLength: 1,
        min: 1,
        max: 3
    },
    p10 : {
        required: true,
        minLength: 1,
        maxLength: 1,
        min: 1,
        max: 9
    },
    p11 : {
        required: true,
        minLength: 2,
        maxLength: 2,
        min: 11,
        max: 55
    },
    p12 : {
        required: true,
        minLength: 1,
        maxLength: 5,
        min: 1,
        max: 65432
    },
    p13 : {
        required: true,
        minLength: 1,
        maxLength: 1,
        min: 1,
        max: 3
    },
    p14 : {
        required: true,
        minLength: 1,
        maxLength: 1,
        min: 1,
        max: 4
    },
    p15 : {
        required: true,
        minLength: 1,
        maxLength: 1,
        min: 1,
        max: 3
    },
    p16 : {
        required: true,
        minLength: 1,
        maxLength: 1,
        min: 1,
        max: 2
    },
    p17 : {
        minLength: 1,
        maxLength: 4,
        min: 1,
        max: 4321
    },
    p17_o : {
        requerido: true,
        minLength: 4,
        maxLength: 180
    },
    p4_o : {
        minLength: 4,
        maxLength: 50,
    },
    p5_o : {
        minLength: 4,
        maxLength: 50,
    },
    p6_o : {
        minLength: 4,
        maxLength: 50,
    },
    p7_o : {
        minLength: 4,
        maxLength: 80,
    },
    p11_o : {
        minLength: 4,
        maxLength: 80,
    },
    p12_o : {
        minLength: 4,
        maxLength: 80,
    },
    p14_o : {
        minLength: 4,
        maxLength: 80,
    }
}

export const requerido = ["edad", "sexo", "p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8", "p9", "p10", "p11", "p12", "p13", "p14", "p15", "p16"]


export const valOtro = {
    p4: "3",
    p5: "4",
    p6: "5",
    p11: "5",
    p12: "6",
    p14: "4"
}

export const multiples = ["p7", "p12", "p11"]

export const seRepite = (numeros) => {
    const string = numeros.toString()
    const array = string.split("")
    const array2 = []
    let control = false

    array.forEach(element => {
        if (array2.includes(element)) {
            return control = true
        }
        array2.push(element)
    })

    return control
}

export const noIncluye = (pregunta, valor) => {
    const valores = {
        sexo: ['1', '2'],
        p1: ['1', '2'],
        p2: ['1', '2', '3'],
        p3: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
        p4: ['1', '2', '3'],
        p5: ['1', '2', '3', '4'],
        p6: ['1', '2', '3', '4', '5'],
        p7: ['1', '2', '3', '4'],
        p8: ['1', '2', '3'],
        p9: ['1', '2', '3'],
        p10: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
        p11: ['1', '2', '3', '4', '5'],
        p12: ['1', '2', '3', '4', '5', '6'],
        p13: ['1', '2', '3', '4', '5'],
        p14: ['1', '2', '3', '4'],
        p15: ['1', '2', '3', '4'],
        p16: ['1', '2', '3'],
    };

    const valorString = valor.toString();

    if (pregunta !== "p3") {
        const valorArray = valorString.split("");
        for (const element of valorArray) {
            if (!valores[pregunta].includes(element)) {
                return true;
            }
        }
    } else {
        if (!valores[pregunta].includes(valorString)) {
            return true;
        }
    }

    return false;
};
