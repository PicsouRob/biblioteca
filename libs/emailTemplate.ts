export const emailTemplate: string = `
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title></title>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400&display=swap" rel="stylesheet">
    </head>

    <body>
        <div className=""
            style="background-color: #f3f4f6; display: flex; flex-direction: column; justify-content: center; justify-items: center; text-align: center; font-family: 'Poppins', sans-serif; margin: auto;">
            <div className="" style="padding: 16px 20px; background-color: white; ">
                <h4 className="">
                    Hola! {{name}},
                </h4>
                <p className="">
                    {{message}}
                </p>

                <p className="">Gracias por usar nuestra biblioteca</p>
            </div>
        </div>
    </body>

    </html>
`;