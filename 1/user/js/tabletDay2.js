Vue.component('lmm-laptop-day-2-container', {
    name: 'lmm-laptop-day-2-container',
    template: '#lmm-laptop-day-2',
    props: {
        closeTestCallback: {
            type: Function,
            default: function () {}
        },
    },
    data: function () {
        return {
            tabInfo: [
                //указать индекс таба и заголовок
                {
                    index: 0, //индекс с нуля
                    tabTitle: 'Отдел рекламы в торговом зале', // заголовок
                    image_src: 'user/images/women_active.png', // ссылка на картинку
                    is_lock: false,
                    start_blocks_ids: [1]
                },
                {
                    index: 1,
                    tabTitle: 'Отдел дизайна',
                    image_src: 'user/images/women_active_2.png',
                    is_lock: true,
                    start_blocks_ids: [2]
                },
                {
                    index: 2,
                    tabTitle: 'Отдел внешней рекламы',
                    image_src: 'user/images/women_active_3.png',
                    is_lock: true,
                    start_blocks_ids: [3]
                },
                {
                    index: 3,
                    tabTitle: 'Отдел рекламы алкоголя',
                    image_src: 'user/images/women_active_5.png',
                    is_lock: true,
                    start_blocks_ids: [4]
                }
            ],
            activeTab: 0,
            keyTab: 1,
            showPanel: false,
            title: {
                //заголовки сверху планшета
                '0': 'Утоли жажду',
                '1': 'вершина мира',
                '2': 'дым в подарок',
                '3': 'можно всем',
            },
            tabItems: [{
                    roots: [{
                            block_id: 1,
                            is_questions: true,
                            is_response: false,
                            is_speach: false,
                            avatar: 'user/images/avatar_women.png',
                            question: 'Привет, записала утром слоган на салфетке, а она промокла, не могу разобрать окончание. Как думаешь, что там в конце? <br><br>Утоли жажду живым...',
                            answer_title: '',
                            speach_title: '',
                            answer_name: 'conversation_16',
                            answers: [{
                                    id: '19',
                                    text: '...квасом!',
                                    tagline_title: 'Слоган',
                                    is_correct: 1,
                                    next_block_id: [2, 3],
                                    feedback_text: '',
                                    comment: 'В рекламе запрещено говорить, что употребление алкогольной продукции является одним из способов утоления жажды.'
                                },
                                {
                                    id: '20',
                                    text: '...пивом!',
                                    tagline_title: 'Слоган',
                                    is_correct: 0,
                                    next_block_id: [4, 5],
                                    feedback_text: '',
                                    comment: 'В рекламе запрещено говорить, что употребление алкогольной продукции является одним из способов утоления жажды.',
                                },
                                {
                                    id: '21',
                                    text: '...карасём!',
                                    tagline_title: 'Слоган',
                                    is_correct: 0,
                                    next_block_id: [6, 7],
                                    feedback_text: '',
                                    comment: 'В рекламе запрещено говорить, что употребление алкогольной продукции является одним из способов утоления жажды.',
                                }
                            ],
                            is_last: false,
                            is_default: true,
                            checked_value: ''
                        },
                        {
                            block_id: 2,
                            is_questions: false,
                            is_response: false,
                            question: '',
                            answer_title: 'Точно, спасибо! Пива там быть не могло, ведь в рекламе запрещено говорить, что употребление алкогольной продукции является одним из способов утоления жажды. ',
                            answer_name: 'conversation_17',
                            answers: [{
                                    id: '',
                                    text: '',
                                    next_block_id: [3],
                                    feedback_text: '',
                                    comment: ''
                                },
                                {
                                    id: '',
                                    text: '',
                                    next_block_id: [3],
                                    feedback_text: '',
                                    comment: '',
                                },
                                {
                                    id: '',
                                    text: '',
                                    next_block_id: [3],
                                    feedback_text: '',
                                    comment: '',
                                }
                            ],
                            is_last: false,
                            is_default: false,
                            checked_value: ''
                        }
                    ],
                    blocks: [{
                            block_id: 1,
                            is_questions: true,
                            is_response: false,
                            is_speach: false,
                            avatar: 'user/images/avatar_women.png',
                            question: 'Привет, записала утром слоган на салфетке, а она промокла, не могу разобрать окончание. Как думаешь, что там в конце? <br><br>Утоли жажду живым...',
                            answer_title: '',
                            speach_title: '',
                            answer_name: 'conversation_16',
                            answers: [{
                                    id: '19',
                                    text: '...квасом!',
                                    tagline_title: 'Слоган',
                                    is_correct: 1,
                                    next_block_id: [2, 3],
                                    feedback_text: '',
                                    comment: 'В рекламе запрещено говорить, что употребление алкогольной продукции является одним из способов утоления жажды.'
                                },
                                {
                                    id: '20',
                                    text: '...пивом!',
                                    tagline_title: 'Слоган',
                                    is_correct: 0,
                                    next_block_id: [4, 5],
                                    feedback_text: '',
                                    comment: 'В рекламе запрещено говорить, что употребление алкогольной продукции является одним из способов утоления жажды.',
                                },
                                {
                                    id: '21',
                                    text: '...карасём!',
                                    tagline_title: 'Слоган',
                                    is_correct: 0,
                                    next_block_id: [6, 7],
                                    feedback_text: '',
                                    comment: 'В рекламе запрещено говорить, что употребление алкогольной продукции является одним из способов утоления жажды.',
                                }
                            ],
                            is_last: false,
                            is_default: true,
                            checked_value: ''
                        },
                        {
                            block_id: 2,
                            is_questions: false,
                            is_response: false,
                            is_speach: false,
                            avatar: 'user/images/avatar_women.png',
                            question: 'Точно, спасибо! Пива там быть не могло, ведь в рекламе запрещено говорить, что употребление алкогольной продукции является одним из способов утоления жажды.',
                            answer_title: '',
                            speach_title: '',
                            answer_name: 'conversation_17',
                            answers: [{
                                    id: '',
                                    text: '',
                                    next_block_id: [3],
                                    feedback_text: '',
                                    comment: ''
                                },
                                {
                                    id: '',
                                    text: '',
                                    next_block_id: [3],
                                    feedback_text: '',
                                    comment: '',
                                },
                                {
                                    id: '',
                                    text: '',
                                    next_block_id: [3],
                                    feedback_text: '',
                                    comment: '',
                                }
                            ],
                            is_last: false,
                            is_default: false,
                            checked_value: ''
                        },
                        {
                            block_id: 3,
                            is_questions: true,
                            is_response: false,
                            is_speach: false,
                            avatar: 'user/images/avatar_women.png',
                            question: 'Кстати, про пиво. Выбери для рекламы снеков логотип, который не требует дополнительной маркировки. <br><br>Не забывай, что товарные знаки производителей алкоголя могут ассоциироваться с алкогольной продукцией и должны отвечать требованиям к рекламе алкоголя.',
                            answer_title: '',
                            answer_name: 'conversation_18',
                            answers: [{
                                    id: '22',
                                    text: '<img class="img-fluid" src="user/images/anwser_03_1.png" alt="anwser_03_1">',
                                    is_correct: 1,
                                    tagline_title: 'Логотип',
                                    next_block_id: [],
                                    feedback_text: 'Прекрасно, этот логотип подойдёт, он не ассоциируется с алкогольной продукцией.',
                                    comment: 'Товарные знаки производителей алкоголя могут ассоциироваться с алкогольной продукцией и должны отвечать требованиям к рекламе алкоголя.',
                                },
                                {
                                    id: '23',
                                    text: '<img class="img-fluid" src="user/images/anwser_03_2.png" alt="anwser_03_2">',
                                    is_correct: 0,
                                    tagline_title: 'Логотип',
                                    next_block_id: [],
                                    feedback_text: 'Плохой выбор, такой логотип ассоциируется с алкогольной продукцией. ',
                                    comment: 'Товарные знаки производителей алкоголя могут ассоциироваться с алкогольной продукцией и должны отвечать требованиям к рекламе алкоголя.',
                                },
                                {
                                    id: '24',
                                    text: '<img class="img-fluid" src="user/images/anwser_03_3.png" alt="anwser_03_3">',
                                    is_correct: 0,
                                    tagline_title: 'Логотип',
                                    next_block_id: [],
                                    feedback_text: 'Плохой выбор, такой логотип ассоциируется с алкогольной продукцией. ',
                                    comment: 'Товарные знаки производителей алкоголя могут ассоциироваться с алкогольной продукцией и должны отвечать требованиям к рекламе алкоголя.',
                                },
                                // {
                                //     id: '25',
                                //     text: '<img class="img-fluid" src="user/images/anwser_03_4.png" alt="anwser_03_4">',
                                //     is_correct: 1,
                                //     tagline_title: 'Логотип',
                                //     next_block_id: [],
                                //     feedback_text: 'Прекрасно, этот логотип подойдёт, он не ассоциируется с алкогольной продукцией.',
                                //     comment: 'Товарные знаки производителей алкоголя могут ассоциироваться с алкогольной продукцией и должны отвечать требованиям к рекламе алкоголя.',
                                // }
                            ],
                            is_last: true,
                            checked_value: ''
                        },
                        {
                            block_id: 4,
                            is_questions: false,
                            is_response: false,
                            is_speach: false,
                            avatar: 'user/images/avatar_women.png',
                            question: 'Нет, пива там быть не могло, ведь в рекламе запрещено говорить, что употребление алкогольной продукции является одним из способов утоления жажды.',
                            answer_title: '',
                            speach_title: '',
                            answer_name: 'conversation_24',
                            answers: [{
                                    id: '',
                                    text: '',
                                    next_block_id: [5],
                                    feedback_text: '',
                                    comment: ''
                                },
                                {
                                    id: '',
                                    text: '',
                                    next_block_id: [5],
                                    feedback_text: '',
                                    comment: '',
                                },
                                {
                                    id: '',
                                    text: '',
                                    next_block_id: [5],
                                    feedback_text: '',
                                    comment: '',
                                }
                            ],
                            is_last: false,
                            is_default: false,
                            checked_value: ''
                        },
                        {
                            block_id: 5,
                            is_questions: true,
                            is_response: false,
                            is_speach: false,
                            avatar: 'user/images/avatar_women.png',
                            question: 'Кстати, про пиво. Выбери для рекламы снеков логотип, который не требует дополнительной маркировки. <br><br>Не забывай, что товарные знаки производителей алкоголя могут ассоциироваться с алкогольной продукцией и должны отвечать требованиям к рекламе алкоголя.',
                            answer_title: '',
                            answer_name: 'conversation_25',
                            answers: [{
                                    id: '36',
                                    text: '<img class="img-fluid" src="user/images/anwser_03_1.png" alt="anwser_03_1">',
                                    is_correct: 1,
                                    tagline_title: 'Логотип',
                                    next_block_id: [],
                                    feedback_text: 'Прекрасно, этот логотип подойдёт, он не ассоциируется с алкогольной продукцией.',
                                    comment: 'Товарные знаки производителей алкоголя могут ассоциироваться с алкогольной продукцией и должны отвечать требованиям к рекламе алкоголя.',
                                },
                                {
                                    id: '37',
                                    text: '<img class="img-fluid" src="user/images/anwser_03_2.png" alt="anwser_03_2">',
                                    is_correct: 0,
                                    tagline_title: 'Логотип',
                                    next_block_id: [],
                                    feedback_text: 'Плохой выбор, такой логотип ассоциируется с алкогольной продукцией. ',
                                    comment: 'Товарные знаки производителей алкоголя могут ассоциироваться с алкогольной продукцией и должны отвечать требованиям к рекламе алкоголя.',
                                },
                                {
                                    id: '38',
                                    text: '<img class="img-fluid" src="user/images/anwser_03_3.png" alt="anwser_03_3">',
                                    is_correct: 0,
                                    tagline_title: 'Логотип',
                                    next_block_id: [],
                                    feedback_text: 'Плохой выбор, такой логотип ассоциируется с алкогольной продукцией. ',
                                    comment: 'Товарные знаки производителей алкоголя могут ассоциироваться с алкогольной продукцией и должны отвечать требованиям к рекламе алкоголя.',
                                },
                                // {
                                //     id: '39',
                                //     text: '<img class="img-fluid" src="user/images/anwser_03_4.png" alt="anwser_03_4">',
                                //     is_correct: 1,
                                //     tagline_title: 'Логотип',
                                //     next_block_id: [],
                                //     feedback_text: 'Прекрасно, этот логотип подойдёт, он не ассоциируется с алкогольной продукцией.',
                                //     comment: 'Товарные знаки производителей алкоголя могут ассоциироваться с алкогольной продукцией и должны отвечать требованиям к рекламе алкоголя.',
                                // }
                            ],
                            is_last: true,
                            checked_value: ''
                        },
                        {
                            block_id: 6,
                            is_questions: false,
                            is_response: false,
                            is_speach: false,
                            avatar: 'user/images/avatar_women.png',
                            question: 'Очень смешно! Что же там было... Может, квас? Точно не пиво, ведь в рекламе запрещено говорить, что употребление алкогольной продукции является одним из способов утоления жажды.',
                            answer_title: '',
                            speach_title: '',
                            answer_name: 'conversation_26',
                            answers: [{
                                    id: '',
                                    text: '',
                                    next_block_id: [5],
                                    feedback_text: '',
                                    comment: ''
                                },
                                {
                                    id: '',
                                    text: '',
                                    next_block_id: [5],
                                    feedback_text: '',
                                    comment: '',
                                },
                                {
                                    id: '',
                                    text: '',
                                    next_block_id: [5],
                                    feedback_text: '',
                                    comment: '',
                                }
                            ],
                            is_last: false,
                            is_default: false,
                            checked_value: ''
                        },
                        {
                            block_id: 7,
                            is_questions: true,
                            is_response: false,
                            is_speach: false,
                            avatar: 'user/images/avatar_women.png',
                            question: 'Кстати, про пиво. Выбери для рекламы снеков логотип, который не требует дополнительной маркировки. <br><br>Не забывай, что товарные знаки производителей алкоголя могут ассоциироваться с алкогольной продукцией и должны отвечать требованиям к рекламе алкоголя.',
                            answer_title: '',
                            answer_name: 'conversation_27',
                            answers: [{
                                    id: '40',
                                    text: '<img class="img-fluid" src="user/images/anwser_03_1.png" alt="anwser_03_1">',
                                    is_correct: 1,
                                    tagline_title: 'Логотип',
                                    next_block_id: [],
                                    feedback_text: 'Прекрасно, этот логотип подойдёт, он не ассоциируется с алкогольной продукцией.',
                                    comment: 'Товарные знаки производителей алкоголя могут ассоциироваться с алкогольной продукцией и должны отвечать требованиям к рекламе алкоголя.',
                                },
                                {
                                    id: '41',
                                    text: '<img class="img-fluid" src="user/images/anwser_03_2.png" alt="anwser_03_2">',
                                    is_correct: 0,
                                    tagline_title: 'Логотип',
                                    next_block_id: [],
                                    feedback_text: 'Плохой выбор, такой логотип ассоциируется с алкогольной продукцией. ',
                                    comment: 'Товарные знаки производителей алкоголя могут ассоциироваться с алкогольной продукцией и должны отвечать требованиям к рекламе алкоголя.',
                                },
                                {
                                    id: '42',
                                    text: '<img class="img-fluid" src="user/images/anwser_03_3.png" alt="anwser_03_3">',
                                    is_correct: 0,
                                    tagline_title: 'Логотип',
                                    next_block_id: [],
                                    feedback_text: 'Плохой выбор, такой логотип ассоциируется с алкогольной продукцией. ',
                                    comment: 'Товарные знаки производителей алкоголя могут ассоциироваться с алкогольной продукцией и должны отвечать требованиям к рекламе алкоголя.',
                                },
                                // {
                                //     id: '43',
                                //     text: '<img class="img-fluid" src="user/images/anwser_03_4.png" alt="anwser_03_4">',
                                //     is_correct: 1,
                                //     tagline_title: 'Логотип',
                                //     next_block_id: [],
                                //     feedback_text: 'Прекрасно, этот логотип подойдёт, он не ассоциируется с алкогольной продукцией.',
                                //     comment: 'Товарные знаки производителей алкоголя могут ассоциироваться с алкогольной продукцией и должны отвечать требованиям к рекламе алкоголя.',
                                // }
                            ],
                            is_last: true,
                            checked_value: ''
                        }
                    ]
                },
                {
                    roots: [{
                            block_id: 1,
                            is_questions: false,
                            is_response: false,
                            is_speach: true,
                            avatar: 'user/images/avatar_women_2.png',
                            question: 'Привет! Я нашла примеры изображений с рекламой алкоголя. Их делал наш стажёр, я ещё не проверяла, отбери нужное.  ',
                            answer_title: '',
                            speach_title: 'Добрый день, есть какие-то тонкости? ',
                            answer_name: 'conversation_19',
                            answers: [{
                                    id: '',
                                    text: '',
                                    next_block_id: [1, 2],
                                    feedback_text: '',
                                    comment: ''
                                },
                                {
                                    id: '',
                                    text: '',
                                    next_block_id: [1, 2],
                                    feedback_text: '',
                                    comment: '',
                                },
                                {
                                    id: '',
                                    text: '',
                                    next_block_id: [1, 2],
                                    feedback_text: '',
                                    comment: '',
                                }
                            ],
                            is_last: false,
                            is_default: true,
                            checked_value: ''
                        },
                        {
                            block_id: 2,
                            is_questions: true,
                            is_response: false,
                            question: 'Конечно, обрати внимание, чтобы макеты не содержали посыла, что употребление алкоголя поднимет социальный статус или настроение человека, поможет ему в достижении успеха или признания. ',
                            answer_title: 'Давай посмотрим. ',
                            avatar: 'user/images/avatar_women_2.png',
                            answer_name: 'conversation_20',
                            answers: [{
                                    id: '26',
                                    text: '<img class="img-fluid" src="user/images/anwser_04_1.png" alt="anwser_04_1">',
                                    is_correct: 0,
                                    tagline_title: 'Макет',
                                    next_block_id: [],
                                    feedback_text: 'Этот плакат не подойдёт, он содержит посыл, что алкоголь вызывает душевный подъём или помогает в социальном общении.',
                                    comment: 'Реклама не должна содержать посыла, что употребление алкоголя поднимет социальный статус или настроение человека, поможет ему в достижении успеха или признания.',
                                },
                                {
                                    id: '27',
                                    text: '<img class="img-fluid" src="user/images/anwser_04_2.png" alt="anwser_04_2">',
                                    is_correct: 0,
                                    tagline_title: 'Макет',
                                    next_block_id: [],
                                    feedback_text: 'Этот плакат не подойдёт, он содержит посыл, что алкоголь вызывает душевный подъём или помогает в социальном общении.',
                                    comment: 'Реклама не должна содержать посыла, что употребление алкоголя поднимет социальный статус или настроение человека, поможет ему в достижении успеха или признания.',
                                },
                                {
                                    id: '28',
                                    text: '<img class="img-fluid" src="user/images/anwser_04_3.png" alt="anwser_04_3">',
                                    is_correct: 1,
                                    tagline_title: 'Макет',
                                    next_block_id: [],
                                    feedback_text: 'Отлично, этот плакат подойдёт — он не содержит посыла, что алкоголь вызывает душевный подъём или помогает в социальном общении. ',
                                    comment: 'Реклама не должна содержать посыла, что употребление алкоголя поднимет социальный статус или настроение человека, поможет ему в достижении успеха или признания.',
                                }
                            ],
                            is_last: true,
                            is_default: true,
                            checked_value: ''
                        }
                    ],
                    blocks: [{
                            block_id: 1,
                            is_questions: false,
                            is_response: false,
                            is_speach: true,
                            avatar: 'user/images/avatar_women_2.png',
                            question: 'Привет! Я нашла примеры изображений с рекламой алкоголя. Их делал наш стажёр, я ещё не проверяла, отбери нужное.  ',
                            answer_title: '',
                            speach_title: 'Добрый день, есть какие-то тонкости? ',
                            answer_name: 'conversation_19',
                            answers: [{
                                    id: '',
                                    text: '',
                                    next_block_id: [1, 2],
                                    feedback_text: '',
                                    comment: ''
                                },
                                {
                                    id: '',
                                    text: '',
                                    next_block_id: [1, 2],
                                    feedback_text: '',
                                    comment: '',
                                },
                                {
                                    id: '',
                                    text: '',
                                    next_block_id: [1, 2],
                                    feedback_text: '',
                                    comment: '',
                                }
                            ],
                            is_last: false,
                            is_default: true,
                            checked_value: ''
                        },
                        {
                            block_id: 2,
                            is_questions: true,
                            is_response: false,
                            question: 'Конечно, обрати внимание, чтобы макеты не содержали посыла, что употребление алкоголя поднимет социальный статус или настроение человека, поможет ему в достижении успеха или признания. ',
                            answer_title: 'Давай посмотрим. ',
                            avatar: 'user/images/avatar_women_2.png',
                            answer_name: 'conversation_20',
                            answers: [{
                                    id: '26',
                                    text: '<img class="img-fluid" src="user/images/anwser_04_1.png" alt="anwser_04_1">',
                                    is_correct: 0,
                                    tagline_title: 'Макет',
                                    next_block_id: [],
                                    feedback_text: 'Этот плакат не подойдёт, он содержит посыл, что алкоголь вызывает душевный подъём или помогает в социальном общении.',
                                    comment: 'Реклама не должна содержать посыла, что употребление алкоголя поднимет социальный статус или настроение человека, поможет ему в достижении успеха или признания.',
                                },
                                {
                                    id: '27',
                                    text: '<img class="img-fluid" src="user/images/anwser_04_2.png" alt="anwser_04_2">',
                                    is_correct: 0,
                                    tagline_title: 'Макет',
                                    next_block_id: [],
                                    feedback_text: 'Этот плакат не подойдёт, он содержит посыл, что алкоголь вызывает душевный подъём или помогает в социальном общении.',
                                    comment: 'Реклама не должна содержать посыла, что употребление алкоголя поднимет социальный статус или настроение человека, поможет ему в достижении успеха или признания.',
                                },
                                {
                                    id: '28',
                                    text: '<img class="img-fluid" src="user/images/anwser_04_3.png" alt="anwser_04_3">',
                                    is_correct: 1,
                                    tagline_title: 'Макет',
                                    next_block_id: [],
                                    feedback_text: 'Отлично, этот плакат подойдёт — он не содержит посыла, что алкоголь вызывает душевный подъём или помогает в социальном общении. ',
                                    comment: 'Реклама не должна содержать посыла, что употребление алкоголя поднимет социальный статус или настроение человека, поможет ему в достижении успеха или признания.',
                                }
                            ],
                            is_last: true,
                            is_default: true,
                            checked_value: ''
                        }
                    ]
                },
                {
                    roots: [{
                        block_id: 1,
                        is_questions: true,
                        is_response: false,
                        is_speach: false,
                        avatar: 'user/images/avatar_man_3.png',
                        question: 'Привет, вот несколько вариантов будущих акций. Выбери корректную. <br><br>Не забывай, что запрещено делать скидки на табачные изделия и проводить мероприятия (лотереи, конкурсы, игры и пр.), условием участия в которых является приобретение табака.',
                        answer_title: '',
                        speach_title: '',
                        answer_name: 'conversation_21',
                        answers: [{
                                id: '29',
                                text: '<img class="img-fluid" src="user/images/anwser_05_1.png" alt="anwser_05_1">',
                                is_correct: 0,
                                tagline_title: 'Макет',
                                next_block_id: [],
                                feedback_text: 'Нельзя устраивать акции, связанные с табачными изделиями.',
                                comment: 'Запрещено предоставлять скидки на табачные изделия и проводить мероприятия (лотереи, конкурсы, игры и пр.), условием участия в которых является приобретение табака – стимулирование продажи табака, табачных изделий.'
                            },
                            {
                                id: '30',
                                text: '<img class="img-fluid" src="user/images/anwser_05_2.png" alt="anwser_05_2">',
                                is_correct: 0,
                                tagline_title: 'Макет',
                                next_block_id: [],
                                feedback_text: 'Нельзя устраивать акции, связанные с табачными изделиями.',
                                comment: 'Запрещено предоставлять скидки на табачные изделия и проводить мероприятия (лотереи, конкурсы, игры и пр.), условием участия в которых является приобретение табака — стимулирование продажи табака, табачных изделий. ',
                            },
                            {
                                id: '31',
                                text: '<img class="img-fluid" src="user/images/anwser_05_4.png" alt="anwser_05_4">',
                                is_correct: 0,
                                tagline_title: 'Макет',
                                next_block_id: [],
                                feedback_text: 'Нельзя устраивать акции, связанные с табачными изделиями.',
                                comment: 'Запрещено предоставлять скидки на табачные изделия и проводить мероприятия (лотереи, конкурсы, игры и пр.), условием участия в которых является приобретение табака — стимулирование продажи табака, табачных изделий. ',
                            },
                            {
                                id: '32',
                                text: '<img class="img-fluid" src="user/images/anwser_05_5.png" alt="anwser_05_5">',
                                is_correct: 1,
                                tagline_title: 'Макет',
                                next_block_id: [],
                                feedback_text: 'Верно, нельзя устраивать акции, связанные с табачными изделиями.',
                                comment: 'Запрещено предоставлять скидки на табачные изделия и проводить мероприятия (лотереи, конкурсы, игры и пр.), условием участия в которых является приобретение табака — стимулирование продажи табака, табачных изделий. ',
                            }
                        ],
                        is_last: true,
                        is_default: true,
                        checked_value: ''
                    }],
                    blocks: [{
                        block_id: 1,
                        is_questions: true,
                        is_response: false,
                        is_speach: false,
                        avatar: 'user/images/avatar_man_3.png',
                        question: 'Привет, вот несколько вариантов будущих акций. Выбери корректную. <br><br>Не забывай, что запрещено делать скидки на табачные изделия и проводить мероприятия (лотереи, конкурсы, игры и пр.), условием участия в которых является приобретение табака.',
                        answer_title: '',
                        speach_title: '',
                        answer_name: 'conversation_21',
                        answers: [{
                                id: '29',
                                text: '<img class="img-fluid" src="user/images/anwser_05_1.png" alt="anwser_05_1">',
                                is_correct: 0,
                                tagline_title: 'Макет',
                                next_block_id: [],
                                feedback_text: 'Нельзя устраивать акции, связанные с табачными изделиями.',
                                comment: 'Запрещено предоставлять скидки на табачные изделия и проводить мероприятия (лотереи, конкурсы, игры и пр.), условием участия в которых является приобретение табака – стимулирование продажи табака, табачных изделий.'
                            },
                            {
                                id: '30',
                                text: '<img class="img-fluid" src="user/images/anwser_05_2.png" alt="anwser_05_2">',
                                is_correct: 0,
                                tagline_title: 'Макет',
                                next_block_id: [],
                                feedback_text: 'Нельзя устраивать акции, связанные с табачными изделиями.',
                                comment: 'Запрещено предоставлять скидки на табачные изделия и проводить мероприятия (лотереи, конкурсы, игры и пр.), условием участия в которых является приобретение табака — стимулирование продажи табака, табачных изделий. ',
                            },
                            {
                                id: '31',
                                text: '<img class="img-fluid" src="user/images/anwser_05_4.png" alt="anwser_05_4">',
                                is_correct: 0,
                                tagline_title: 'Макет',
                                next_block_id: [],
                                feedback_text: 'Нельзя устраивать акции, связанные с табачными изделиями.',
                                comment: 'Запрещено предоставлять скидки на табачные изделия и проводить мероприятия (лотереи, конкурсы, игры и пр.), условием участия в которых является приобретение табака — стимулирование продажи табака, табачных изделий. ',
                            },
                            {
                                id: '32',
                                text: '<img class="img-fluid" src="user/images/anwser_05_5.png" alt="anwser_05_5">',
                                is_correct: 1,
                                tagline_title: 'Макет',
                                next_block_id: [],
                                feedback_text: 'Верно, нельзя устраивать акции, связанные с табачными изделиями.',
                                comment: 'Запрещено предоставлять скидки на табачные изделия и проводить мероприятия (лотереи, конкурсы, игры и пр.), условием участия в которых является приобретение табака — стимулирование продажи табака, табачных изделий. ',
                            }
                        ],
                        is_last: true,
                        is_default: true,
                        checked_value: ''
                    }]
                },
                {
                    roots: [{
                            block_id: 1,
                            is_questions: false,
                            is_response: false,
                            is_speach: true,
                            avatar: 'user/images/avatar_man_5.png',
                            question: 'Как тебе новый ролик с рекламой пива? Планируем запускать на телевидение и на билборды ещё повесить.',
                            answer_title: '',
                            speach_title: 'Рекламу алкоголя на телевидение? И ведь в такую рекламу надо добавлять соответсвующие предупредительные надписи, не вижу их.',
                            answer_name: 'conversation_22',
                            answers: [{
                                    id: '',
                                    text: '',
                                    next_block_id: [1, 2],
                                    feedback_text: '',
                                    comment: ''
                                },
                                {
                                    id: '',
                                    text: '',
                                    next_block_id: [1, 2],
                                    feedback_text: '',
                                    comment: '',
                                },
                                {
                                    id: '',
                                    text: '',
                                    next_block_id: [1, 2],
                                    feedback_text: '',
                                    comment: '',
                                }
                            ],
                            is_last: false,
                            is_default: true,
                            checked_value: ''
                        },
                        {
                            block_id: 2,
                            is_questions: true,
                            is_response: false,
                            question: 'Это безалкогольное пиво! Но в твоих словах есть правда, может, чем-то дополнить материалы?',
                            answer_title: '',
                            avatar: 'user/images/avatar_man_5.png',
                            answer_name: 'conversation_23',
                            answers: [{
                                    id: '33',
                                    text: '<img class="img-fluid" src="user/images/anwser_06_1.png" alt="anwser_06_1">',
                                    is_correct: 1,
                                    tagline_title: 'Реклама',
                                    next_block_id: [],
                                    feedback_text: 'Прекрасно. Это реклама безалкогольного напитка, и ему нужен соответствующий знак. ',
                                    comment: 'На рекламу безалкогольного пива не распространяются требования и ограничения, установленные для алкогольной продукции, но в такой рекламе желательно использовать пиктограмму о том, что это безалкогольная продукция.',
                                },
                                {
                                    id: '34',
                                    text: '<img class="img-fluid" src="user/images/anwser_06_2.png" alt="anwser_06_2">',
                                    is_correct: 0,
                                    tagline_title: 'Реклама',
                                    next_block_id: [],
                                    feedback_text: 'Странно, ведь это реклама безалкогольного напитка, и ему нужен соответствующий знак.',
                                    comment: 'На рекламу безалкогольного пива не распространяются требования и ограничения, установленные для алкогольной продукции, но в такой рекламе желательно использовать пиктограмму о том, что это безалкогольная продукция.',
                                },
                                {
                                    id: '35',
                                    text: '<img class="img-fluid" src="user/images/anwser_06_3.png" alt="anwser_06_3">',
                                    is_correct: 0,
                                    tagline_title: 'Реклама',
                                    next_block_id: [],
                                    feedback_text: 'Странно, ведь это реклама безалкогольного напитка, и ему нужен соответствующий знак.',
                                    comment: 'На рекламу безалкогольного пива не распространяются требования и ограничения, установленные для алкогольной продукции, но в такой рекламе желательно использовать пиктограмму о том, что это безалкогольная продукция.',
                                }
                            ],
                            is_last: true,
                            is_default: true,
                            checked_value: ''
                        }
                    ],
                    blocks: [{
                            block_id: 1,
                            is_questions: false,
                            is_response: false,
                            is_speach: true,
                            avatar: 'user/images/avatar_man_5.png',
                            question: 'Как тебе новый ролик с рекламой пива? Планируем запускать на телевидение и на билборды ещё повесить.',
                            answer_title: '',
                            speach_title: 'Рекламу алкоголя на телевидение? И ведь в такую рекламу надо добавлять соответсвующие предупредительные надписи, не вижу их.',
                            answer_name: 'conversation_21',
                            answers: [{
                                    id: '',
                                    text: '',
                                    next_block_id: [1, 2],
                                    feedback_text: '',
                                    comment: ''
                                },
                                {
                                    id: '',
                                    text: '',
                                    next_block_id: [1, 2],
                                    feedback_text: '',
                                    comment: '',
                                },
                                {
                                    id: '',
                                    text: '',
                                    next_block_id: [1, 2],
                                    feedback_text: '',
                                    comment: '',
                                }
                            ],
                            is_last: false,
                            is_default: true,
                            checked_value: ''
                        },
                        {
                            block_id: 2,
                            is_questions: true,
                            is_response: false,
                            question: 'Это безалкогольное пиво! Но в твоих словах есть правда, может, чем-то дополнить материалы?',
                            answer_title: '',
                            avatar: 'user/images/avatar_man_5.png',
                            answer_name: 'conversation_22',
                            answers: [{
                                    id: '33',
                                    text: '<img class="img-fluid" src="user/images/anwser_06_1.png" alt="anwser_06_1">',
                                    is_correct: 1,
                                    tagline_title: 'Реклама',
                                    next_block_id: [],
                                    feedback_text: 'Прекрасно. Это реклама безалкогольного напитка, и ему нужен соответствующий знак. ',
                                    comment: 'На рекламу безалкогольного пива не распространяются требования и ограничения, установленные для алкогольной продукции, но в такой рекламе желательно использовать пиктограмму о том, что это безалкогольная продукция.',
                                },
                                {
                                    id: '34',
                                    text: '<img class="img-fluid" src="user/images/anwser_06_2.png" alt="anwser_06_2">',
                                    is_correct: 0,
                                    tagline_title: 'Реклама',
                                    next_block_id: [],
                                    feedback_text: 'Странно, ведь это реклама безалкогольного напитка, и ему нужен соответствующий знак.',
                                    comment: 'На рекламу безалкогольного пива не распространяются требования и ограничения, установленные для алкогольной продукции, но в такой рекламе желательно использовать пиктограмму о том, что это безалкогольная продукция.',
                                },
                                {
                                    id: '35',
                                    text: '<img class="img-fluid" src="user/images/anwser_06_3.png" alt="anwser_06_3">',
                                    is_correct: 0,
                                    tagline_title: 'Реклама',
                                    next_block_id: [],
                                    feedback_text: 'Странно, ведь это реклама безалкогольного напитка, и ему нужен соответствующий знак.',
                                    comment: 'На рекламу безалкогольного пива не распространяются требования и ограничения, установленные для алкогольной продукции, но в такой рекламе желательно использовать пиктограмму о том, что это безалкогольная продукция.',
                                }
                            ],
                            is_last: true,
                            is_default: true,
                            checked_value: ''
                        }
                    ]
                }
            ],
            checkedValues: [],
            feedbackText: '',
            isShowFeedback: false,
            isCorrect: false,
        };
    },
    computed: {
        afterActive: function () {
            this.activeTab = CLJ.activeTabDay2.nRawScore;

            this.tabInfo.map(function (tab, index) {
                tab.is_lock = index > 0;
            });
        },
        isShowButton: function () {
            var curTab = this.tabItems[this.activeTab];
            var rootsLength = curTab.roots.length;
            return curTab.roots[rootsLength - 1].is_last === true;
        },
    },
    mounted: function () {
        this.afterActive;

        this.getAfterActive();
        Vue.nextTick(function () {
            setTimeout(function () {
                setTextTails();
            }, 0);
        });
        onScrollContent();
        window.addEventListener('resize', setTextTails);
        var vm = this;
        EventBus.$on('reset-dialog-day-2', function () {
            vm.resetDialogDay2();
        });
        if (CLV.oGlobal['tablet_third_data']) {
            this.tabInfo = JSON.parse(CLV.oGlobal['tablet_third_data']);
        }
    },
    methods: {
        getAfterActive: function () {
            this.activeTab = CLJ.activeTabDay2.nRawScore;

            setTimeout(function () {
                setTextTails();
            }, 250);
        },
        tabUnloc: function () {
            var curTab = this.tabItems[this.activeTab]

            var rootsLength = curTab.roots.length;

            //проверка на последний элемент
            this.showPanel = curTab.roots[rootsLength - 1].is_last === true
        },
        setTextTails: function () {
            $('.triangle').each(function () {
                $(this).css('border-bottom-width', $(this).parent().outerHeight());
            })
        },
        changeActiveTab: function (index) {

            this.activeTab = index;

            Vue.nextTick(function () {
                setTimeout(function () {
                    setTextTails();
                }, 0);
            });
        },
        applyAnswer: function () {
            this.isShowFeedback = true;
            // Общий прогресс курса
            ++CLJ.total_progress.nRawScore;

            Vue.nextTick(function () {
                setTimeout(function () {
                    setTextTails();
                }, 0);
            });

            this.isShowFeedback = true;

            // EventBus.$emit('addAnswer', {
            //     answer: this.checkedValues[this.checkedValues.length - 1],
            //     keyTab: this.keyTab
            // })

        },
        nextSlide: function () {
            $(".lmm-overflow-y-auto").animate({
                scrollTop: 0
            }, 0);
            scrollSticky();

            if (this.isCorrect) {
                $("#TXT_31 .tablet__items-item").each(function (key, index) {
                    var active = !$(this).hasClass("active") && !$(this).hasClass("lock") && !$(this).hasClass("correct") && !$(this).hasClass("incorrect");

                    var save = 'activeStateDay2_'.concat(key + 1);

                    if (active) {
                        CLV.oGlobal[save] = 1;
                    }
                });
                --CLJ.total_alcohol.nRawScore;
            } else {
                $("#TXT_31 .tablet__items-item").each(function (key, index) {
                    var active = !$(this).hasClass("active") && !$(this).hasClass("lock") && !$(this).hasClass("correct") && !$(this).hasClass("incorrect");

                    var save = 'activeStateDay2_'.concat(key + 1);

                    if (active) {
                        CLV.oGlobal[save] = 2;
                    }
                });
                ++CLJ.total_alcohol.nRawScore;
            }

            this.isShowFeedback = false;

            //разблокировка табов
            if (this.activeTab !== this.tabInfo.length - 1) {
                this.tabInfo[this.activeTab + 1].is_lock = false;
                CLV.oGlobal['tablet_third_data'] = JSON.stringify(this.tabInfo);
            }

            //скрыть панель при переходе
            this.showPanel = false;

            //Переключаемся на сл. таб
            if (this.activeTab < this.tabInfo.length - 1) {
                CLJ.activeTabDay2.nRawScore = CLJ.activeTabDay2.nRawScore + 1;

                ++this.activeTab;

                this.activeTab = CLJ.activeTabDay2.nRawScore;


                Vue.nextTick(function () {
                    setTimeout(function () {
                        setTextTails();
                    }, 0);
                });
            }

            this.closeTestCallback();
        },
        setValue: function ($event, block_id, answer) {
            setTimeout(function () {
                setTextTails();
            }, 250);

            answer.is_selected = $event.target.checked;

            this.feedbackText = answer.feedback_text;
            //разблокировка нижней панели
            this.tabUnloc();

            this.checkedValues.push({
                block_id: block_id,
                answer_id: answer.id,
                answer_text: answer.text,
                answer_correct: answer.is_correct,
                comment: answer.comment,
                tagline_title: answer.tagline_title,
            })

            EventBus.$emit('addAnswer', {
                answer: this.checkedValues[this.checkedValues.length - 1],
                keyTab: this.keyTab
            })

            var _this = this;


            answer.next_block_id.map(function (item) {
                _this.tabItems[_this.activeTab].blocks.map(function (block) {
                    if (block.block_id === item) {
                        _this.tabItems[_this.activeTab].roots.push(block)
                    }
                })
            });
            Vue.nextTick(function () {
                setTimeout(function () {
                    setTextTails();
                }, 250);
            });

            if ((answer.is_correct && !answer.is_selected) || (!answer.is_correct && answer.is_selected)) {
                this.isCorrect = false;
                return false;
            }
            this.isCorrect = true;
            return true;
        },
        setValueResponse: function (block_id, response) {
            var _this = this;
            response.next_block_id.map(function (item) {
                _this.tabItems[_this.activeTab].blocks.map(function (block) {
                    if (block.block_id === item) {
                        _this.tabItems[_this.activeTab].roots.push(block)
                    }
                })
            });
            Vue.nextTick(function () {
                setTimeout(function () {
                    setTextTails();
                }, 0);
            });
        },
        changeAnswer: function () {

            this.feedbackText = '';

            this.tabItems[this.activeTab].roots.map(function (item) {
                item.checked_value = ''
            })

            var array = [];

            var blocks = this.tabItems[this.activeTab].blocks;

            //обновляем массив начальных данных в планшете
            blocks.forEach(function (item, key) {
                if (item.is_default === true) {
                    array.push(item);
                }
            })

            //скрываем кнопки
            this.showPanel = false;

            this.tabItems[this.activeTab].roots = array;

            setTimeout(function () {
                setTextTails();
            }, 0);

            this.checkedValues = []
        },
        resetDialogDay2: function () {

            this.activeTab = 0;
            this.feedbackText = '';

            this.tabInfo.map(function (tab, index) {
                tab.is_lock = index > 0;
            });

            this.tabItems.map(function (tab) {
                var array = [];

                tab.blocks.forEach(function (item, key) {
                    if (item.is_default === true) {
                        array.push(item);
                    }
                    item.checked_value = '';
                })

                tab.roots = array;

                // tab.blocks.splice(0, tab.blocks.length);
                // tab.roots.map(function(obj) {
                //     obj.checked_value = '';
                //     tab.blocks.push(obj);
                // })

                // console.log(tab.blocks);
                // console.log(tab.roots);
            });

            setTimeout(function () {
                setTextTails();
            }, 0);

            //скрываем кнопки
            this.showPanel = false

            this.checkedValues = [];
        }
    }
});