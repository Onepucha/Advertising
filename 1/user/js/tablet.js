Vue.component('lmm-laptop-container', {
    name: 'lmm-laptop-container',
    template: '#lmm-laptop',
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
                    image_src: 'user/images/women_active_6.png', // ссылка на картинку
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
                    tabTitle: 'Команда эко-инициатив',
                    image_src: 'user/images/women_active_4.png',
                    is_lock: true,
                    start_blocks_ids: [4]
                }
            ],
            activeTab: 0,
            keyTab: 0,
            showPanel: false,
            title: {
                //заголовки сверху планшета
                '0': 'время пить чай',
                '1': 'Абибас',
                '2': 'какие-то яйца',
                '3': 'в белом пальто',
            },
            tabItems: [{
                    roots: [{
                            block_id: 7,
                            is_questions: false,
                            is_response: false,
                            is_speach: true,
                            avatar: 'user/images/avatar_women_5.png',
                            question: 'Да, ещё поступили новые алтайские чаи!',
                            answer_title: '',
                            speach_title: 'Что за слоган про чаи? ',
                            answer_name: 'conversation_7',
                            answers: [{
                                    id: '',
                                    text: '',
                                    next_block_id: [8, 9],
                                    feedback_text: '',
                                    comment: ''
                                },
                                {
                                    id: '',
                                    text: '',
                                    next_block_id: [8, 9],
                                    feedback_text: '',
                                    comment: '',
                                },
                                {
                                    id: '',
                                    text: '',
                                    next_block_id: [8, 9],
                                    feedback_text: '',
                                    comment: '',
                                }
                            ],
                            is_last: false,
                            is_default: true,
                            checked_value: ''
                        },
                        {
                            block_id: 8,
                            is_questions: false,
                            is_response: false,
                            avatar: 'user/images/avatar_women_5.png',
                            question: 'Слоганы, которые учитывают, что в рекламе запрещено говорить о лечебных свойствах продукта, если он — не лекарственное средство или медицинская услуга. <br><br>Варианты следующие.',
                            answer_title: '',
                            answer_name: 'conversation_8',
                            responses: [{
                                    id: '',
                                    text: '',
                                    next_block_id: [9],
                                    feedback_text: '',
                                    comment: '',
                                },
                                {
                                    id: '',
                                    text: '',
                                    next_block_id: [9],
                                    feedback_text: '',
                                    comment: '',
                                }
                            ],
                            is_last: false,
                            is_default: true,
                            checked_value: ''
                        },
                        {
                            block_id: 9,
                            is_questions: true,
                            is_response: false,
                            is_speach: false,
                            avatar: 'user/images/avatar_women_5.png',
                            question: '',
                            answer_title: '',
                            answer_name: 'conversation_9',
                            answers: [{
                                    id: '7',
                                    tagline_title: 'Слоган',
                                    is_correct: 0,
                                    text: 'Глоток здоровья: новинки алтайских фиточаёв.',
                                    next_block_id: [],
                                    feedback_text: 'Не лучший выбор. Мы не продаём лекарственные средства, а в слогане содержится информация о лечебных свойствах продукта.',
                                    comment: 'В рекламе запрещено говорить о леченых свойствах продукта, если это не лекарственное средство или медицинская услуга.',
                                },
                                {
                                    id: '8',
                                    tagline_title: 'Слоган',
                                    is_correct: 1,
                                    text: 'Чай — философия жизни. Новинки фиточаёв.',
                                    next_block_id: [],
                                    feedback_text: 'Точно, это хороший слоган, он не говорит о лечебных свойствах продукта.',
                                    comment: 'В рекламе запрещено говорить о леченых свойствах продукта, если это не лекарственное средство или медицинская услуга.',
                                },
                                {
                                    id: '9',
                                    tagline_title: 'Слоган',
                                    is_correct: 0,
                                    text: 'Секрет долголетия раскрыт: попробуйте и вы новые фиточаи. ',
                                    next_block_id: [],
                                    feedback_text: 'Не лучший выбор. Мы не продаём лекарственные средства, а в слогане содержится информация о лечебных свойствах продукта.',
                                    comment: 'В рекламе запрещено говорить о леченых свойствах продукта, если это не лекарственное средство или медицинская услуга.',
                                }
                            ],
                            is_last: true,
                            is_default: true,
                            checked_value: ''
                        }
                    ],
                    blocks: [{
                            block_id: 7,
                            is_questions: false,
                            is_response: false,
                            is_speach: true,
                            avatar: 'user/images/avatar_women_5.png',
                            question: 'Да, ещё поступили новые алтайские чаи!',
                            answer_title: '',
                            speach_title: 'Что за слоган про чаи? ',
                            answer_name: 'conversation_7',
                            answers: [{
                                    id: '',
                                    text: '',
                                    next_block_id: [8, 9],
                                    feedback_text: '',
                                    comment: ''
                                },
                                {
                                    id: '',
                                    text: '',
                                    next_block_id: [8, 9],
                                    feedback_text: '',
                                    comment: '',
                                },
                                {
                                    id: '',
                                    text: '',
                                    next_block_id: [8, 9],
                                    feedback_text: '',
                                    comment: '',
                                }
                            ],
                            is_last: false,
                            is_default: true,
                            checked_value: ''
                        },
                        {
                            block_id: 8,
                            is_questions: false,
                            is_response: false,
                            avatar: 'user/images/avatar_women_5.png',
                            question: 'Слоганы, которые учитывают, что в рекламе запрещено говорить о лечебных свойствах продукта, если он — не лекарственное средство или медицинская услуга. <br><br>Варианты следующие.',
                            answer_title: '',
                            answer_name: 'conversation_8',
                            responses: [{
                                    id: '',
                                    text: '',
                                    next_block_id: [9],
                                    feedback_text: '',
                                    comment: '',
                                },
                                {
                                    id: '',
                                    text: '',
                                    next_block_id: [9],
                                    feedback_text: '',
                                    comment: '',
                                }
                            ],
                            is_last: false,
                            is_default: true,
                            checked_value: ''
                        },
                        {
                            block_id: 9,
                            is_questions: true,
                            is_response: false,
                            is_speach: false,
                            avatar: 'user/images/avatar_women_5.png',
                            question: '',
                            answer_title: '',
                            answer_name: 'conversation_9',
                            answers: [{
                                    id: '7',
                                    tagline_title: 'Слоган',
                                    is_correct: 0,
                                    text: 'Глоток здоровья: новинки алтайских фиточаёв.',
                                    next_block_id: [],
                                    feedback_text: 'Не лучший выбор. Мы не продаём лекарственные средства, а в слогане содержится информация о лечебных свойствах продукта.',
                                    comment: 'В рекламе запрещено говорить о леченых свойствах продукта, если это не лекарственное средство или медицинская услуга.',
                                },
                                {
                                    id: '8',
                                    tagline_title: 'Слоган',
                                    is_correct: 1,
                                    text: 'Чай — философия жизни. Новинки фиточаёв.',
                                    next_block_id: [],
                                    feedback_text: 'Точно, это хороший слоган, он не говорит о лечебных свойствах продукта.',
                                    comment: 'В рекламе запрещено говорить о леченых свойствах продукта, если это не лекарственное средство или медицинская услуга.',
                                },
                                {
                                    id: '9',
                                    tagline_title: 'Слоган',
                                    is_correct: 0,
                                    text: 'Секрет долголетия раскрыт: попробуйте и вы новые фиточаи. ',
                                    next_block_id: [],
                                    feedback_text: 'Не лучший выбор. Мы не продаём лекарственные средства, а в слогане содержится информация о лечебных свойствах продукта.',
                                    comment: 'В рекламе запрещено говорить о леченых свойствах продукта, если это не лекарственное средство или медицинская услуга.',
                                }
                            ],
                            is_last: true,
                            is_default: true,
                            checked_value: ''
                        },
                    ]
                },
                {
                    roots: [{
                            block_id: 10,
                            is_questions: false,
                            is_response: false,
                            is_speach: false,
                            avatar: 'user/images/avatar_women_2.png',
                            question: 'Привет, тебе нужны были примеры дизайна?<br><br> Мы как раз смотрим футболки нескольких поставщиков. Но некоторые логотипы очень напоминают известные товарные знаки, а мы можем использовать только лого и товарные знаки, принадлежащие нам. Какой взять, что думаешь?',
                            answer_title: '',
                            speach_title: '',
                            answer_name: 'conversation_10',
                            answers: [{
                                    id: '',
                                    text: '',
                                    next_block_id: [7, 8],
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
                            block_id: 11,
                            is_questions: true,
                            is_response: false,
                            question: '',
                            answer_title: '',
                            avatar: 'user/images/avatar_women_2.png',
                            answer_name: 'conversation_11',
                            answers: [{
                                    id: '10',
                                    tagline_title: 'Логотип',
                                    is_correct: 0,
                                    text: '<img class="img-fluid" src="user/images/anwser_01_1.png" alt="anwser_01_1">',
                                    next_block_id: [],
                                    feedback_text: 'Всё-таки логотип этой футболки похож на товарный знак Adidas.',
                                    comment: 'Использование чужих товарных знаков или товарных знаков, визуально напоминающих известные, запрещено.',
                                },
                                {
                                    id: '11',
                                    tagline_title: 'Логотип',
                                    is_correct: 0,
                                    text: '<img class="img-fluid" src="user/images/anwser_01_2.png" alt="anwser_01_2">',
                                    next_block_id: [],
                                    feedback_text: 'Всё-таки логотип этой футболки похож на товарный знак Nike.',
                                    comment: 'Использование чужих товарных знаков или товарных знаков, визуально напоминающих известные, запрещено.',
                                },
                                {
                                    id: '12',
                                    tagline_title: 'Логотип',
                                    is_correct: 1,
                                    text: '<img class="img-fluid" src="user/images/anwser_01_3.png" alt="anwser_01_3">',
                                    next_block_id: [],
                                    feedback_text: 'Да, эта футболка подойдёт. Лого не похоже на известные товарные знаки.',
                                    comment: 'Использование чужих товарных знаков или товарных знаков, визуально напоминающих известные, запрещено.',
                                },
                                // {
                                //     id: '13',
                                //     tagline_title: 'Логотип',
                                //     is_correct: 1,
                                //     text: '<img class="img-fluid" src="user/images/anwser_01_4.png" alt="anwser_01_4">',
                                //     next_block_id: [],
                                //     feedback_text: 'Да, эта футболка подойдёт. Лого не похоже на известные товарные знаки.',
                                //     comment: 'Использование чужих товарных знаков или товарных знаков, визуально напоминающих известные, запрещено.',
                                // }
                            ],
                            is_last: true,
                            is_default: true,
                            checked_value: ''
                        }
                    ],
                    blocks: [{
                            block_id: 10,
                            is_questions: false,
                            is_response: false,
                            is_speach: false,
                            avatar: 'user/images/avatar_women_2.png',
                            question: 'Привет, тебе нужны были примеры дизайна?<br><br> Мы как раз смотрим футболки нескольких поставщиков. Но некоторые логотипы очень напоминают известные товарные знаки, а мы можем использовать только лого и товарные знаки, принадлежащие нам. Какой взять, что думаешь?',
                            answer_title: '',
                            speach_title: '',
                            answer_name: 'conversation_10',
                            answers: [{
                                    id: '',
                                    text: '',
                                    next_block_id: [7, 8],
                                    feedback_text: '',
                                    comment: ''
                                },
                                {
                                    id: '',
                                    text: '',
                                    next_block_id: [7, 8],
                                    feedback_text: '',
                                    comment: '',
                                },
                                {
                                    id: '',
                                    text: '',
                                    next_block_id: [7, 8],
                                    feedback_text: '',
                                    comment: '',
                                }
                            ],
                            is_last: false,
                            is_default: true,
                            checked_value: ''
                        },
                        {
                            block_id: 11,
                            is_questions: true,
                            is_response: false,
                            is_speach: false,
                            is_last: true,
                            question: '',
                            answer_title: '',
                            avatar: 'user/images/avatar_women_2.png',
                            answer_name: 'conversation_11',
                            answers: [{
                                    id: '10',
                                    tagline_title: 'Логотип',
                                    is_correct: 0,
                                    text: '<img class="img-fluid" src="user/images/anwser_01_1.png" alt="anwser_01_1">',
                                    next_block_id: [],
                                    feedback_text: 'Всё-таки логотип этой футболки похож на известный товарный знак: Nike или Adidas.',
                                    comment: 'Использование чужих товарных знаков или товарных знаков, визуально напоминающих известные, запрещено.',
                                },
                                {
                                    id: '11',
                                    tagline_title: 'Логотип',
                                    is_correct: 0,
                                    text: '<img class="img-fluid" src="user/images/anwser_01_2.png" alt="anwser_01_2">',
                                    next_block_id: [],
                                    feedback_text: 'Всё-таки логотип этой футболки похож на известный товарный знак: Nike или Adidas.',
                                    comment: 'Использование чужих товарных знаков или товарных знаков, визуально напоминающих известные, запрещено.',
                                },
                                {
                                    id: '12',
                                    tagline_title: 'Логотип',
                                    is_correct: 1,
                                    text: '<img class="img-fluid" src="user/images/anwser_01_3.png" alt="anwser_01_3">',
                                    next_block_id: [],
                                    feedback_text: 'Да, эта футболка подойдёт. Лого не похоже на известные товарные знаки.',
                                    comment: 'Использование чужих товарных знаков или товарных знаков, визуально напоминающих известные, запрещено.',
                                },
                                // {
                                //     id: '13',
                                //     tagline_title: 'Логотип',
                                //     is_correct: 1,
                                //     text: '<img class="img-fluid" src="user/images/anwser_01_4.png" alt="anwser_01_4">',
                                //     next_block_id: [],
                                //     feedback_text: 'Да, эта футболка подойдёт. Лого не похоже на известные товарные знаки.',
                                //     comment: 'Использование чужих товарных знаков или товарных знаков, визуально напоминающих известные, запрещено.',
                                // }
                            ],
                            is_last: true,
                            is_default: true,
                            checked_value: ''
                        }
                    ]
                },
                {
                    roots: [{
                            block_id: 12,
                            is_questions: false,
                            is_response: false,
                            is_speach: true,
                            avatar: 'user/images/avatar_man_3.png',
                            question: 'Я не нашёл нужных макетов. Тебе нужна была листовка с упаковкой яиц и ценником, но я нигде не могу найти хорошее фото.',
                            answer_title: '',
                            speach_title: 'Ты можешь поставить на задний план другую упаковку? Никто ведь не будет разбираться, какие там яйца нарисованы. Продавец вправе заменить некоторые нюансы товара или упаковки.',
                            answer_name: 'conversation_12',
                            answers: [{
                                    id: '',
                                    text: '',
                                    next_block_id: [2],
                                    feedback_text: '',
                                    comment: ''
                                },
                                {
                                    id: '',
                                    text: '',
                                    next_block_id: [2],
                                    feedback_text: '',
                                    comment: '',
                                },
                                {
                                    id: '',
                                    text: '',
                                    next_block_id: [2],
                                    feedback_text: '',
                                    comment: '',
                                }
                            ],
                            is_last: false,
                            is_default: true,
                            checked_value: ''
                        },
                        {
                            block_id: 13,
                            is_questions: true,
                            is_response: false,
                            is_speach: false,
                            is_last: true,
                            avatar: 'user/images/avatar_man_3.png',
                            question: 'Так делать нельзя, покупатель может ориентироваться на визуальное восприятие товара, такая подмена будет рекламой, которая вводит в заблуждение.  <br><br> Выбери макет, который содержит полную и достоверную информацию о рекламируемом товаре.',
                            answer_title: '',
                            answer_name: 'conversation_13',
                            answers: [{
                                    id: '13',
                                    tagline_title: 'Реклама',
                                    is_correct: 0,
                                    text: '<img class="img-fluid" src="user/images/anwser_02_1.png" alt="anwser_02_1">',
                                    next_block_id: [],
                                    feedback_text: 'С этой рекламой есть проблемы. На первом плакате в ценнике указана категория яиц «С2», в то время как на плакате изображена коробка с категорией «С1». Вторая коробка слишком нейтральная.',
                                    comment: 'У меня остался один слоган. Выбирая его, не забывай, что реклама должна быть достоверной, не должна искажать достоинства или очернять товары конкурентов.',
                                },
                                {
                                    id: '14',
                                    tagline_title: 'Реклама',
                                    is_correct: 0,
                                    text: '<img class="img-fluid" src="user/images/anwser_02_2.png" alt="anwser_02_2">',
                                    next_block_id: [],
                                    feedback_text: 'С этой рекламой есть проблемы. На первом плакате в ценнике указана категория яиц «С2», в то время как на плакате изображена коробка с категорией «С1». Вторая коробка слишком нейтральная.',
                                    comment: 'У меня остался один слоган. Выбирая его, не забывай, что реклама должна быть достоверной, не должна искажать достоинства или очернять товары конкурентов.',
                                },
                                {
                                    id: '15',
                                    tagline_title: 'Реклама',
                                    is_correct: 1,
                                    text: '<img class="img-fluid" src="user/images/anwser_02_3.png" alt="anwser_01_3">',
                                    next_block_id: [],
                                    feedback_text: 'Отлично, это корректная реклама.',
                                    comment: 'Отлично, это корректная реклама. Первый плакат содержит неверную информацию, а второй — слишком нейтральный.',
                                }
                            ],
                            is_last: true,
                            is_default: true,
                            checked_value: ''
                        }
                    ],
                    blocks: [{
                            block_id: 12,
                            is_questions: false,
                            is_response: false,
                            is_speach: true,
                            avatar: 'user/images/avatar_man_3.png',
                            question: 'Я не нашёл нужных макетов. Тебе нужна была листовка с упаковкой яиц и ценником, но я нигде не могу найти хорошее фото.',
                            answer_title: '',
                            speach_title: 'Ты можешь поставить на задний план другую упаковку? Никто ведь не будет разбираться, какие там яйца нарисованы. Продавец вправе заменить некоторые нюансы товара или упаковки.',
                            answer_name: 'conversation_12',
                            answers: [{
                                    id: '',
                                    text: '',
                                    next_block_id: [2],
                                    feedback_text: '',
                                    comment: ''
                                },
                                {
                                    id: '',
                                    text: '',
                                    next_block_id: [2],
                                    feedback_text: '',
                                    comment: '',
                                },
                                {
                                    id: '',
                                    text: '',
                                    next_block_id: [2],
                                    feedback_text: '',
                                    comment: '',
                                }
                            ],
                            is_last: false,
                            is_default: true,
                            checked_value: ''
                        },
                        {
                            block_id: 13,
                            is_questions: true,
                            is_response: false,
                            is_speach: false,
                            avatar: 'user/images/avatar_man_3.png',
                            question: 'Так делать нельзя, покупатель может ориентироваться на визуальное восприятие товара, такая подмена будет рекламой, которая вводит в заблуждение. <br><br> Выбери макет, который содержит полную и достоверную информацию о рекламируемом товаре.',
                            answer_title: '',
                            answer_name: 'conversation_13',
                            answers: [{
                                    id: '13',
                                    tagline_title: 'Реклама',
                                    is_correct: 0,
                                    text: '<img class="img-fluid" src="user/images/anwser_02_1.png" alt="anwser_02_1">',
                                    next_block_id: [],
                                    feedback_text: 'С этой рекламой есть проблемы: первый плакат содержит неверную информацию, а второй — слишком нейтральный.',
                                    comment: 'У меня остался один слоган. Выбирая его, не забывай, что реклама должна быть достоверной, не должна искажать достоинства или очернять товары конкурентов.',
                                },
                                {
                                    id: '14',
                                    tagline_title: 'Реклама',
                                    is_correct: 0,
                                    text: '<img class="img-fluid" src="user/images/anwser_02_2.png" alt="anwser_02_2">',
                                    next_block_id: [],
                                    feedback_text: 'С этой рекламой есть проблемы: первый плакат содержит неверную информацию, а второй — слишком нейтральный.',
                                    comment: 'У меня остался один слоган. Выбирая его, не забывай, что реклама должна быть достоверной, не должна искажать достоинства или очернять товары конкурентов.',
                                },
                                {
                                    id: '15',
                                    tagline_title: 'Реклама',
                                    is_correct: 1,
                                    text: '<img class="img-fluid" src="user/images/anwser_02_3.png" alt="anwser_01_3">',
                                    next_block_id: [],
                                    feedback_text: 'Отлично, это корректная реклама.',
                                    comment: 'Отлично, это корректная реклама. Первый плакат содержит неверную информацию, а второй — слишком нейтральный.',
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
                            block_id: 14,
                            is_questions: false,
                            is_response: false,
                            is_speach: false,
                            avatar: 'user/images/avatar_women_4.png',
                            question: 'У меня остался один слоган. Выбирая его, не забывай, что реклама должна быть достоверной, не должна искажать достоинства или очернять товары конкурентов.',
                            answer_title: '',
                            speach_title: '',
                            answer_name: 'conversation_14',
                            answers: [{
                                    id: '',
                                    text: '',
                                    next_block_id: [2],
                                    feedback_text: '',
                                    comment: ''
                                },
                                {
                                    id: '',
                                    text: '',
                                    next_block_id: [2],
                                    feedback_text: '',
                                    comment: '',
                                },
                                {
                                    id: '',
                                    text: '',
                                    next_block_id: [2],
                                    feedback_text: '',
                                    comment: '',
                                }
                            ],
                            is_last: false,
                            is_default: true,
                            checked_value: ''
                        },
                        {
                            block_id: 15,
                            is_questions: true,
                            is_response: false,
                            is_speach: false,
                            question: '',
                            answer_title: '',
                            avatar: 'user/images/avatar_women_4.png',
                            answer_name: 'conversation_15',
                            answers: [{
                                    id: '16',
                                    tagline_title: 'Слоган',
                                    is_correct: 1,
                                    text: 'Поступление фруктовок в Пятёрочку - меньше пакетов, чище планета!',
                                    next_block_id: [],
                                    feedback_text: 'Отличный слоган!',
                                    comment: 'Реклама должна быть достоверна, не должна искажать или очернять конкурентов и реализуемые ими товары.',
                                },
                                {
                                    id: '17',
                                    tagline_title: 'Слоган',
                                    is_correct: 0,
                                    text: 'Пока конкуренты раздают пакеты, мы запасаемся фруктовками. Пятёрочка - с нами не пропадёшь!',
                                    next_block_id: [],
                                    feedback_text: 'Этот слоган очерняет действия конкурентов. ',
                                    comment: 'Реклама должна быть достоверна, не должна искажать или очернять конкурентов и реализуемые ими товары.',
                                },
                                {
                                    id: '18',
                                    tagline_title: 'Слоган',
                                    is_correct: 0,
                                    text: 'Мы больше не раздаём бесплатные пакеты, как наши конкуренты. Пятёрочка — с заботой о вас и экологии.',
                                    next_block_id: [],
                                    feedback_text: 'Этот слоган очерняет действия конкурентов. ',
                                    comment: 'Реклама должна быть достоверна, не должна искажать или очернять конкурентов и реализуемые ими товары.',
                                }
                            ],
                            is_last: true,
                            is_default: true,
                            checked_value: ''
                        }
                    ],
                    blocks: [{
                            block_id: 14,
                            is_questions: false,
                            is_response: false,
                            is_speach: false,
                            avatar: 'user/images/avatar_women_4.png',
                            question: 'У меня остался один слоган. Выбирая его, не забывай, что реклама должна быть достоверной, не должна искажать достоинства или очернять товары конкурентов.',
                            answer_title: '',
                            speach_title: '',
                            answer_name: 'conversation_14',
                            answers: [{
                                    id: '',
                                    text: '',
                                    next_block_id: [2],
                                    feedback_text: '',
                                    comment: ''
                                },
                                {
                                    id: '',
                                    text: '',
                                    next_block_id: [2],
                                    feedback_text: '',
                                    comment: '',
                                },
                                {
                                    id: '',
                                    text: '',
                                    next_block_id: [2],
                                    feedback_text: '',
                                    comment: '',
                                }
                            ],
                            is_last: false,
                            is_default: true,
                            checked_value: ''
                        },
                        {
                            block_id: 15,
                            is_questions: true,
                            is_response: false,
                            is_speach: false,
                            question: '',
                            answer_title: '',
                            avatar: 'user/images/avatar_women_4.png',
                            answer_name: 'conversation_15',
                            answers: [{
                                    id: '16',
                                    tagline_title: 'Слоган',
                                    is_correct: 1,
                                    text: 'Поступление фруктовок в Пятёрочку - меньше пакетов, чище планета!',
                                    next_block_id: [],
                                    feedback_text: 'Отличный слоган!',
                                    comment: 'Реклама должна быть достоверна, не должна искажать или очернять конкурентов и реализуемые ими товары.',
                                },
                                {
                                    id: '17',
                                    tagline_title: 'Слоган',
                                    is_correct: 0,
                                    text: 'Пока конкуренты раздают пакеты, мы запасаемся фруктовками. Пятёрочка - с нами не пропадёшь!',
                                    next_block_id: [],
                                    feedback_text: 'Этот слоган очерняет действия конкурентов. ',
                                    comment: 'Реклама должна быть достоверна, не должна искажать или очернять конкурентов и реализуемые ими товары.',
                                },
                                {
                                    id: '18',
                                    tagline_title: 'Слоган',
                                    is_correct: 0,
                                    text: 'Мы больше не раздаём бесплатные пакеты, как наши конкуренты. Пятёрочка — с заботой о вас и экологии.',
                                    next_block_id: [],
                                    feedback_text: 'Этот слоган очерняет действия конкурентов. ',
                                    comment: 'Реклама должна быть достоверна, не должна искажать или очернять конкурентов и реализуемые ими товары.',
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
            total_requirements: 0,
            isCorrect: false,
        };
    },
    computed: {
        afterActive: function () {
            this.activeTab = CLJ.activeTabDay1.nRawScore;

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
        EventBus.$on('reset-dialog-day-1', function () {
            vm.resetDialogDay1();
        });
        if (CLV.oGlobal['tablet_second_data']) {
            this.tabInfo = JSON.parse(CLV.oGlobal['tablet_second_data']);
        }
    },
    methods: {
        getAfterActive: function () {
            this.activeTab = CLJ.activeTabDay1.nRawScore;

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
            // Общий прогресс курса
            ++CLJ.total_progress.nRawScore;

            Vue.nextTick(function () {
                setTimeout(function () {
                    setTextTails();
                }, 0);
            });

            this.isShowFeedback = true;

            EventBus.$emit('addAnswer', {
                answer: this.checkedValues[this.checkedValues.length - 1],
                keyTab: this.keyTab,
            })


        },
        nextSlide: function () {
            $(".lmm-overflow-y-auto").animate({
                scrollTop: 0
            }, 0);
            scrollSticky();

            if (this.isCorrect) {
                $("#TXT_22 .tablet__items-item").each(function (key, index) {
                    var active = !$(this).hasClass("active") && !$(this).hasClass("lock") && !$(this).hasClass("correct") && !$(this).hasClass("incorrect");

                    var save = 'activeStateDay1_'.concat(key + 1);

                    if (active) {
                        CLV.oGlobal[save] = 1;
                    }
                });
                --CLJ.total_requirements.nRawScore;
            } else {
                $("#TXT_22 .tablet__items-item").each(function (key, index) {
                    var active = !$(this).hasClass("active") && !$(this).hasClass("lock") && !$(this).hasClass("correct") && !$(this).hasClass("incorrect");

                    var save = 'activeStateDay1_'.concat(key + 1);

                    if (active) {
                        CLV.oGlobal[save] = 2;
                    }
                });
                ++CLJ.total_requirements.nRawScore;
            }

            this.isShowFeedback = false;

            //разблокировка табов
            if (this.activeTab !== this.tabInfo.length - 1) {
                this.tabInfo[this.activeTab + 1].is_lock = false;
                CLV.oGlobal['tablet_second_data'] = JSON.stringify(this.tabInfo);
            }

            //скрыть панель при переходе
            this.showPanel = false;

            //Переключаемся на сл. таб
            if (this.activeTab < this.tabInfo.length - 1) {

                CLJ.activeTabDay1.nRawScore = CLJ.activeTabDay1.nRawScore + 1;

                ++this.activeTab;

                this.activeTab = CLJ.activeTabDay1.nRawScore;

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
            this.isCorrect = false;
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
        resetDialogDay1: function () {
            this.isCorrect = false;
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