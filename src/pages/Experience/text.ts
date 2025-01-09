export type Item = {
    title: string;
    time: string;
    paragraph: string;
};

export interface TextsExperience {
    Titles: {
        Work: string;
        Volunteering: string;
    };
    Works: Item[];
    Volunteering: Item[];
};

export const textPt: TextsExperience = {
    Titles: {
        Work: "Trabalhos",
        Volunteering: "Voluntariados",
    },
    Works: [
        {
            title: 'Aprendiz',
            time: '01/12/2022 - Atual',
            paragraph: 'Atuo na SOS ECO BIKE, localizada na Avenida Presidente Juscelino Kubitschek, 4946 - Monte Castelo, São José dos Campos - SP. Minhas atividades são focadas principalmente no atendimento ao cliente e na manutenção mecânica de bicicletas. Entre minhas responsabilidades estão garantir a satisfação dos clientes por meio de um atendimento de qualidade e realizar reparos e ajustes técnicos, assegurando o pleno funcionamento e a segurança das bicicletas.'
        }
    ],
    Volunteering: [
        {
            title: 'Multimidia',
            time: '01/01/2021 - Atual',
            paragraph: 'Atuo na Igreja Evangélica Pentecostal Deus é Fiel, localizada na Rua Riachuelo, 190 - Jardim Paulista, São José dos Campos - SP. Minhas responsabilidades incluem o controle da mesa de som e do projetor, garantindo a qualidade do áudio e das apresentações visuais durante os eventos e cultos.'
        }
    ]
};

export const textEn: TextsExperience = {
    Titles: {
        Work: "Work",
        Volunteering: "Volunteering",
    },
    Works: [
        {
            title: 'Apprentice',
            time: '12/01/2022 - Present',
            paragraph: 'I work at SOS ECO BIKE, located at Avenida Presidente Juscelino Kubitschek, 4946 - Monte Castelo, São José dos Campos - SP. My activities are mainly focused on customer service and bicycle mechanical maintenance. Among my responsibilities are ensuring customer satisfaction through quality service and performing technical repairs and adjustments, ensuring the full functionality and safety of the bicycles.'
        }
    ],
    Volunteering: [
        {
            title: 'Multimedia',
            time: '01/01/2021 - Present',
            paragraph: 'I work at the Evangelical Pentecostal Church Deus é Fiel, located at Rua Riachuelo, 190 - Jardim Paulista, São José dos Campos - SP. My responsibilities include controlling the soundboard and projector, ensuring the quality of audio and visual presentations during events and services.'
        }
    ]
};