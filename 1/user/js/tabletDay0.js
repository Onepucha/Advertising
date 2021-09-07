Vue.component('lmm-laptop-day-0-container', {
    name: 'lmm-laptop-day-0-container',
    template: '#lmm-laptop-day-0',
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
                    tabTitle: 'Отдел рекламы на TV и баннерах',
                    image_src: 'user/images/women_active_3.png',
                    is_lock: true,
                    start_blocks_ids: [3]
                },
                {
                    index: 3,
                    tabTitle: 'Отдел рекламы алкогольной продукции',
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
                '0': 'сплошная польза',
                '1': 'Абибас',
                '2': 'какие-то яйца',
                '3': 'в белом пальто',
            },
            tabItems: [
                {
                    roots: [{
                            block_id: 1,
                            is_questions: false,
                            is_response: false,
                            is_speach: true,
                            avatar: 'user/images/avatar_women.png',
                            question: 'Добрый день!<br><br>Нам нужно обсудить рекламные слоганы. У нас в магазине как раз поступление фруктов, и мы обсуждаем слоганы к их рекламной акции.',
                            answer_title: '',
                            speach_title: 'Добрый день, Ия. Что будем обсуждать?',
                            answer_name: 'conversation_1',
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
                            block_id: 2,
                            is_questions: false,
                            is_response: true,
                            avatar: 'user/images/avatar_women.png',
                            question: 'Это примеры достоверной и недостоверной рекламы. Реклама должна отображать только реальные сведения, например, если мы говорим, что наш товар лучший, это должно быть подтверждено экспертизой или победой в конкурсе. Все сравнения должны быть обоснованы.',
                            answer_title: '',
                            answer_name: 'conversation_2',
                            responses: [{
                                    id: '1',
                                    text: 'Всё понятно, спасибо!',
                                    next_block_id: [3],
                                    feedback_text: '',
                                    comment: '',
                                },
                                {
                                    id: '2',
                                    text: 'Не очень понятно, а есть примеры?',
                                    next_block_id: [4, 5, 6],
                                    feedback_text: '',
                                    comment: '',
                                }
                            ],
                            is_last: false,
                            is_default: true,
                            checked_value: ''
                        }
                    ],
                    blocks: [{
                            block_id: 1,
                            is_questions: false,
                            is_response: false,
                            is_speach: true,
                            avatar: 'user/images/avatar_women.png',
                            question: 'Добрый день!<br>Нам нужно обсудить рекламные слоганы. У нас в магазине как раз поступление фруктов, и мы обсуждаем слоганы к их рекламной акции.',
                            answer_title: '',
                            speach_title: 'Добрый день, Ия. Что будем обсуждать?',
                            answer_name: 'conversation_1',
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
                            block_id: 2,
                            is_questions: false,
                            is_response: true,
                            avatar: 'user/images/avatar_women.png',
                            question: 'Это примеры достоверной и недостоверной рекламы. Реклама должна отображать только реальные сведения, например, если мы говорим, что наш товар лучший, это должно быть подтверждено экспертизой или победой в конкурсе. Все сравнения должны быть обоснованы.',
                            answer_title: '',
                            answer_name: 'conversation_2',
                            responses: [{
                                    id: '1',
                                    text: 'Всё понятно, спасибо!',
                                    next_block_id: [3],
                                    feedback_text: '',
                                    comment: '',
                                },
                                {
                                    id: '2',
                                    text: 'Не очень понятно, а есть примеры?',
                                    next_block_id: [4, 5, 6],
                                    feedback_text: '',
                                    comment: '',
                                }
                            ],
                            is_last: false,
                            is_default: true,
                            checked_value: ''
                        },
                        {
                            block_id: 3,
                            is_questions: true,
                            is_response: false,
                            is_speach: false,
                            avatar: 'user/images/avatar_women.png',
                            question: 'Есть такие варианты слоганов, выбери верный.',
                            answer_title: '',
                            answer_name: 'conversation_3',
                            answers: [{
                                    id: '4',
                                    tagline_title: 'Слоган',
                                    is_correct: 0,
                                    text: 'Сливы, бананы, груши, гранаты — семья витаминами будет богата, и апельсины с оранжевой корочкой, лучшие фрукты ищите в Пятёрочке!',
                                    next_block_id: [],
                                    feedback_text: 'Плохой выбор, так как данный слоган содержит сравнение без ссылки на документальное подтверждение такого утверждения.',
                                    comment: 'При сравнении объекта рекламирования с иными товарами характеристиками «лучший», «первый», «номер один», обязательно указание конкретного критерия сравнения с объективным подтверждением. Иначе это будет недостоверная реклама.',
                                },
                                {
                                    id: '5',
                                    tagline_title: 'Слоган',
                                    is_correct: 1,
                                    text: 'Свежие витамины каждый день!',
                                    next_block_id: [],
                                    feedback_text: 'Отлично, это достоверный слоган.',
                                    comment: 'При сравнении объекта рекламирования с иными товарами характеристиками «лучший», «первый», «номер один», обязательно указание конкретного критерия сравнения с объективным подтверждением. Иначе это будет недостоверная реклама.',
                                },
                                {
                                    id: '6',
                                    tagline_title: 'Слоган',
                                    is_correct: 0,
                                    text: 'За свежими фруктами — только в Пятёрочку!',
                                    next_block_id: [],
                                    feedback_text: 'Плохой выбор, так как данный слоган содержит сравнение без ссылки на документальное подтверждение такого утверждения.',
                                    comment: 'При сравнении объекта рекламирования с иными товарами характеристиками «лучший», «первый», «номер один», обязательно указание конкретного критерия сравнения с объективным подтверждением. Иначе это будет недостоверная реклама.',
                                }
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
                            question: 'Смотри, если мы говорим «Пятёрочка — магазин номер один в России!» или «Свежий хлеб — только в Перекрёстке!», надо тут же привести исследование, которое это доказывает.',
                            answer_title: '',
                            answer_name: 'conversation_4',
                            answers: [{
                                    id: '',
                                    text: '',
                                    next_block_id: [],
                                    feedback_text: '',
                                    comment: '',
                                },
                                {
                                    id: '',
                                    text: '',
                                    next_block_id: [],
                                    feedback_text: '',
                                    comment: '',
                                },
                                {
                                    id: '',
                                    text: '',
                                    next_block_id: [],
                                    feedback_text: '',
                                    comment: '',
                                }
                            ],
                            is_last: false,
                            checked_value: ''
                        },
                        {
                            block_id: 5,
                            is_questions: false,
                            is_response: false,
                            is_speach: true,
                            question: '',
                            answer_title: '',
                            speach_title: 'Всё понятно, спасибо!',
                            answer_name: 'conversation_5',
                            answers: [{
                                    id: '',
                                    text: '',
                                    next_block_id: [],
                                    feedback_text: '',
                                    comment: '',
                                },
                                {
                                    id: '',
                                    text: '',
                                    next_block_id: [],
                                    feedback_text: '',
                                    comment: '',
                                },
                                {
                                    id: '',
                                    text: '',
                                    next_block_id: [],
                                    feedback_text: '',
                                    comment: '',
                                }
                            ],
                            is_last: false,
                            checked_value: ''
                        },
                        {
                            block_id: 6,
                            is_questions: true,
                            is_response: false,
                            is_speach: false,
                            is_last: true,
                            avatar: 'user/images/avatar_women.png',
                            question: 'Есть такие варианты слоганов, выбери верный.',
                            answer_title: '',
                            answer_name: 'conversation_6',
                            answers: [{
                                    id: '4',
                                    tagline_title: 'Слоган',
                                    is_correct: 0,
                                    text: 'Сливы, бананы, груши, гранаты — семья витаминами будет богата, и апельсины с оранжевой корочкой, лучшие фрукты ищите в Пятёрочке!',
                                    next_block_id: [],
                                    feedback_text: 'Плохой выбор, выбранный слоган содержит необоснованное сравнение (только, лучший, номер один).',
                                    comment: 'При сравнении объекта рекламирования с иными товарами характеристиками «лучший», «первый», «номер один», обязательно указание конкретного критерия сравнения с объективным подтверждением. Иначе это будет недостоверная реклама.',
                                },
                                {
                                    id: '5',
                                    tagline_title: 'Слоган',
                                    is_correct: 1,
                                    text: 'Свежие витамины каждый день!',
                                    next_block_id: [],
                                    feedback_text: 'Отлично, это достоверный слоган.',
                                    comment: 'При сравнении объекта рекламирования с иными товарами характеристиками «лучший», «первый», «номер один», обязательно указание конкретного критерия сравнения с объективным подтверждением. Иначе это будет недостоверная реклама.',
                                },
                                {
                                    id: '6',
                                    tagline_title: 'Слоган',
                                    is_correct: 0,
                                    text: 'За свежими фруктами — только в Пятёрочку!',
                                    next_block_id: [],
                                    feedback_text: 'Плохой выбор, выбранный слоган содержит необоснованное сравнение (только, лучший, номер один).',
                                    comment: 'При сравнении объекта рекламирования с иными товарами характеристиками «лучший», «первый», «номер один», обязательно указание конкретного критерия сравнения с объективным подтверждением. Иначе это будет недостоверная реклама.',
                                }
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
                            avatar: 'user/images/avatar_women.png',
                            question: 'Добрый день!<br><br>Нам нужно обсудить рекламные слоганы. У нас в магазине как раз поступление фруктов, и мы обсуждаем слоганы к их рекламной акции.',
                            answer_title: '',
                            speach_title: 'Добрый день, И . Что будем обсуждать?123',
                            answer_name: 'conversation_30',
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
                            block_id: 2,
                            is_questions: false,
                            is_response: true,
                            avatar: 'user/images/avatar_women.png',
                            question: 'Это примеры достоверной и недостоверной рекламы. Реклама должна отображать только реальные сведения, например, если мы говорим, что наш товар лучший, это должно быть подтверждено экспертизой или победой в конкурсе. Все сравнения должны быть обоснованы.',
                            answer_title: '',
                            answer_name: 'conversation_31',
                            responses: [{
                                    id: '50',
                                    text: 'Всё понятно, спасибо!',
                                    next_block_id: [3],
                                    feedback_text: '',
                                    comment: '',
                                },
                                {
                                    id: '51',
                                    text: 'Не очень понятно, а есть примеры?',
                                    next_block_id: [4, 5, 6],
                                    feedback_text: '',
                                    comment: '',
                                }
                            ],
                            is_last: false,
                            is_default: true,
                            checked_value: ''
                        }
                    ],
                    blocks: [{
                            block_id: 1,
                            is_questions: false,
                            is_response: false,
                            is_speach: true,
                            avatar: 'user/images/avatar_women.png',
                            question: 'Добрый день!<br>Нам нужно обсудить рекламные слоганы. У нас в магазине как раз поступление фруктов, и мы обсуждаем слоганы к их рекламной акции.',
                            answer_title: '',
                            speach_title: 'Добрый день, Ия. Что будем обсуждать?',
                            answer_name: 'conversation_30',
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
                            block_id: 2,
                            is_questions: false,
                            is_response: true,
                            avatar: 'user/images/avatar_women.png',
                            question: 'Это примеры достоверной и недостоверной рекламы. Реклама должна отображать только реальные сведения, например, если мы говорим, что наш товар лучший, это должно быть подтверждено экспертизой или победой в конкурсе. Все сравнения должны быть обоснованы.',
                            answer_title: '',
                            answer_name: 'conversation_31',
                            responses: [{
                                    id: '50',
                                    text: 'Всё понятно, спасибо!',
                                    next_block_id: [3],
                                    feedback_text: '',
                                    comment: '',
                                },
                                {
                                    id: '51',
                                    text: 'Не очень понятно, а есть примеры?',
                                    next_block_id: [4, 5, 6],
                                    feedback_text: '',
                                    comment: '',
                                }
                            ],
                            is_last: false,
                            is_default: true,
                            checked_value: ''
                        },
                        {
                            block_id: 3,
                            is_questions: true,
                            is_response: false,
                            is_speach: false,
                            avatar: 'user/images/avatar_women.png',
                            question: 'Есть такие варианты слоганов, выбери верный.',
                            answer_title: '',
                            answer_name: 'conversation_32',
                            answers: [{
                                    id: '52',
                                    tagline_title: 'Слоган',
                                    is_correct: 0,
                                    text: 'Сливы, бананы, груши, гранаты — семья витаминами будет богата, и апельсины с оранжевой корочкой, лучшие фрукты ищите в Пятёрочке!',
                                    next_block_id: [],
                                    feedback_text: 'Плохой выбор, выбранный слоган содержит необоснованное сравнение (только, лучший, номер один).',
                                    comment: 'При сравнении объекта рекламирования с иными товарами характеристиками «лучший», «первый», «номер один», обязательно указание конкретного критерия сравнения с объективным подтверждением. Иначе это будет недостоверная реклама.',
                                },
                                {
                                    id: '53',
                                    tagline_title: 'Слоган',
                                    is_correct: 1,
                                    text: 'Свежие витамины каждый день!',
                                    next_block_id: [],
                                    feedback_text: 'Отлично, это достоверный слоган.',
                                    comment: 'При сравнении объекта рекламирования с иными товарами характеристиками «лучший», «первый», «номер один», обязательно указание конкретного критерия сравнения с объективным подтверждением. Иначе это будет недостоверная реклама.',
                                },
                                {
                                    id: '54',
                                    tagline_title: 'Слоган',
                                    is_correct: 0,
                                    text: 'За свежими фруктами — только в Пятёрочку!',
                                    next_block_id: [],
                                    feedback_text: 'Плохой выбор, выбранный слоган содержит необоснованное сравнение (только, лучший, номер один).',
                                    comment: 'При сравнении объекта рекламирования с иными товарами характеристиками «лучший», «первый», «номер один», обязательно указание конкретного критерия сравнения с объективным подтверждением. Иначе это будет недостоверная реклама.',
                                }
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
                            question: 'Смотри, если мы говорим «Пятёрочка — магазин номер один в России!» или «Свежий хлеб — только в Перекрёстке!», надо тут же привести исследование, которое это доказывает.',
                            answer_title: '',
                            answer_name: 'conversation_33',
                            answers: [{
                                    id: '',
                                    text: '',
                                    next_block_id: [],
                                    feedback_text: '',
                                    comment: '',
                                },
                                {
                                    id: '',
                                    text: '',
                                    next_block_id: [],
                                    feedback_text: '',
                                    comment: '',
                                },
                                {
                                    id: '',
                                    text: '',
                                    next_block_id: [],
                                    feedback_text: '',
                                    comment: '',
                                }
                            ],
                            is_last: false,
                            checked_value: ''
                        },
                        {
                            block_id: 5,
                            is_questions: false,
                            is_response: false,
                            is_speach: true,
                            question: '',
                            answer_title: '',
                            speach_title: 'Всё понятно, спасибо!',
                            answer_name: 'conversation_34',
                            answers: [{
                                    id: '',
                                    text: '',
                                    next_block_id: [],
                                    feedback_text: '',
                                    comment: '',
                                },
                                {
                                    id: '',
                                    text: '',
                                    next_block_id: [],
                                    feedback_text: '',
                                    comment: '',
                                },
                                {
                                    id: '',
                                    text: '',
                                    next_block_id: [],
                                    feedback_text: '',
                                    comment: '',
                                }
                            ],
                            is_last: false,
                            checked_value: ''
                        },
                        {
                            block_id: 6,
                            is_questions: true,
                            is_response: false,
                            is_speach: false,
                            is_last: true,
                            avatar: 'user/images/avatar_women.png',
                            question: 'Есть такие варианты слоганов, выбери верный.',
                            answer_title: '',
                            answer_name: 'conversation_35',
                            answers: [{
                                    id: '55',
                                    tagline_title: 'Слоган',
                                    is_correct: 0,
                                    text: 'Сливы, бананы, груши, гранаты — семья витаминами будет богата, и апельсины с оранжевой корочкой, лучшие фрукты ищите в Пятёрочке!',
                                    next_block_id: [],
                                    feedback_text: 'Плохой выбор, выбранный слоган содержит необоснованное сравнение (только, лучший, номер один).',
                                    comment: 'При сравнении объекта рекламирования с иными товарами характеристиками «лучший», «первый», «номер один», обязательно указание конкретного критерия сравнения с объективным подтверждением. Иначе это будет недостоверная реклама.',
                                },
                                {
                                    id: '56',
                                    tagline_title: 'Слоган',
                                    is_correct: 1,
                                    text: 'Свежие витамины каждый день!',
                                    next_block_id: [],
                                    feedback_text: 'Отлично, это достоверный слоган.',
                                    comment: 'При сравнении объекта рекламирования с иными товарами характеристиками «лучший», «первый», «номер один», обязательно указание конкретного критерия сравнения с объективным подтверждением. Иначе это будет недостоверная реклама.',
                                },
                                {
                                    id: '57',
                                    tagline_title: 'Слоган',
                                    is_correct: 0,
                                    text: 'За свежими фруктами — только в Пятёрочку!',
                                    next_block_id: [],
                                    feedback_text: 'Плохой выбор, выбранный слоган содержит необоснованное сравнение (только, лучший, номер один).',
                                    comment: 'При сравнении объекта рекламирования с иными товарами характеристиками «лучший», «первый», «номер один», обязательно указание конкретного критерия сравнения с объективным подтверждением. Иначе это будет недостоверная реклама.',
                                }
                            ],
                            is_last: true,
                            checked_value: ''
                        }
                    ]
                },
            ],
            checkedValues: [],
            feedbackText: '',
            isShowFeedback: false,
            total_requirements: 0,
            isCorrect: false,
        };
    },
    computed: {
        // isShowButton: function () {
        //     var curTab = this.tabItems[this.activeTab];
        //     var rootsLength = curTab.roots.length;
        //     return curTab.roots[rootsLength - 1].is_last === true;
        // },
    },
    mounted: function () {
        Vue.nextTick(function () {
            setTimeout(function () {
                setTextTails();
            }, 0);
        });
        onScrollContent();
        window.addEventListener('resize', setTextTails);
        var vm = this;
        EventBus.$on('reset-dialog-day-0', function () {
            vm.resetDialogDay0();
        });
        if(CLV.oGlobal['tablet_first_data']) {
            this.tabInfo = JSON.parse(CLV.oGlobal['tablet_first_data']);
        }
    },
    methods: {
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
                keyTab: this.keyTab
            })


        },
        nextSlide: function () {
            $(".lmm-overflow-y-auto").animate({
                scrollTop: 0
            }, 0);
            scrollSticky();

            if (this.isCorrect) {
                --CLJ.total_requirements.nRawScore;
            } else {
                ++CLJ.total_requirements.nRawScore;
            }

            this.isShowFeedback = false;

            //разблокировка табов
            if (this.activeTab !== this.tabInfo.length - 1) {
                this.tabInfo[this.activeTab + 1].is_lock = false;
                CLV.oGlobal['tablet_first_data'] = JSON.stringify(this.tabInfo);
            }

            //скрыть панель при переходе
            this.showPanel = false;

            //Переключаемся на сл. таб
            if (this.activeTab < this.tabInfo.length - 1) {
                ++this.activeTab;
                Vue.nextTick(function () {
                    setTimeout(function () {
                        setTextTails();
                    }, 0);
                });
            }

            this.closeTestCallback();
        },
        setValue: function ($event, block_id, answer) {

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
                }, 0);
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
        resetDialogDay0: function () {
            this.isCorrect = false;
            this.activeTab = 0;
            this.feedbackText = '';

            

            this.tabInfo.map(function(tab, index) {
                tab.is_lock = index > 0;
            });
            
            this.tabItems.map(function(tab) {
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


            console.log(this.tabItems);

            setTimeout(function () {
                setTextTails();
            }, 0);

            //скрываем кнопки
            this.showPanel = false;
            
            this.checkedValues = [];
        }
    }
});