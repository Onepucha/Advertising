Vue.component('lmm-laptop-day-3-container', {
    name: 'lmm-laptop-day-3-container',
    template: '#lmm-laptop-day-3',
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
                    tabTitle: 'Отдел внешней рекламы',
                    image_src: 'user/images/women_active_3.png',
                    is_lock: true,
                    start_blocks_ids: [2]
                }
            ],
            activeTab: 0,
            keyTab: 2,
            showPanel: false,
            title: {
                //заголовки сверху планшета
                '0': 'правила есть правила',
                '1': 'вам письмо',
            },
            tabItems: [{
                    roots: [{
                        block_id: 1,
                        is_questions: true,
                        is_response: false,
                        is_speach: false,
                        avatar: 'user/images/avatar_women.png',
                        question: 'Привет, у нас проходит несколько акций, возьми на заметку те, к которым не нужно разрабатывать отдельные правила. <br><br>Касательно правил: организатор мероприятия до его начала должен разработать, согласовать и разместить правила проведения на выбранной им площадке. Для мероприятий с простой механикой, например, с предоставлением скидки, 2+1, можно не разрабатывать отдельные правила, а указать их на ценнике, рекламном макете и упаковке.',
                        answer_title: '',
                        speach_title: '',
                        answer_name: 'conversation_28',
                        answers: [{
                                id: '44',
                                text: 'Купи три шоколадки, а заплати за две. ',
                                tagline_title: 'Слоган',
                                is_correct: 1,
                                next_block_id: [],
                                feedback_text: 'Да, эта подойдёт, это акция с простой механикой.',
                                comment: '<div class="text__xl mb-magenta">Организатор СМ обязан до даты начала проведения СМ разработать, согласовать и разместить правила проведения:</div><ul class="list list__ul text__xl mb-yellow"> <li class="list__ul--dash">либо на официальном сайте СМ (при наличии);</li> <li class="list__ul--dash">либо на сайте ТС;</li> <li class="list__ul--dash">либо на отдельно созданной лэндинговой странице;</li> <li class="list__ul--dash">либо непосредственно в магазинах, участниках СМ;</li></ul><div class="text__xl mb-magenta">В правилах СМ должна быть указана следующая информация:</div><ul class="list list__ul text__xl"> <li class="list__ul--dash">Вид СМ – акция, конкурс, розыгрыш, иное.</li> <li class="list__ul--dash">Организатор СМ – ИНН, адрес регистрации.</li> <li class="list__ul--dash">Оператор, партнер СМ (при наличии) — ИНН, адрес регистрации.</li> <li class="list__ul--dash">Сроки проведения СМ, включая срок приема заявок, анкет, выдачи призов.</li> <li class="list__ul--dash">Участники акции.</li> <li class="list__ul--dash">Механика СМ.</li> <li class="list__ul--dash">Количество акционного товара, призов, подарков.</li> <li class="list__ul--dash">Стоимость призов, подарков.</li> <li class="list__ul--dash">Порядок поредения победителей (при наличии розыгрыша).</li> <li class="list__ul--dash">Порядок, место и сроки выдачи призов, подарков.</li> <li class="list__ul--dash">Информация о налогообложении, если стоимость призов, подарков выше 4 000 руб. (Приоритетное условие — налог платит сам победитель).</li> <li class="list__ul--dash">Информация об обработке персональных данных.</li></ul>'
                            },
                            {
                                id: '45',
                                text: 'Купи чипсы, зарегистрируй чек и получи шанс выиграть автомобиль.',
                                tagline_title: 'Слоган',
                                is_correct: 0,
                                next_block_id: [],
                                feedback_text: 'Нет, механика этой акции должна быть прописана в полных правилах ',
                                comment: '<div class="text__xl mb-magenta">Организатор СМ обязан до даты начала проведения СМ разработать, согласовать и разместить правила проведения:</div><ul class="list list__ul text__xl mb-yellow"> <li class="list__ul--dash">либо на официальном сайте СМ (при наличии);</li> <li class="list__ul--dash">либо на сайте ТС;</li> <li class="list__ul--dash">либо на отдельно созданной лэндинговой странице;</li> <li class="list__ul--dash">либо непосредственно в магазинах, участниках СМ;</li></ul><div class="text__xl mb-magenta">В правилах СМ должна быть указана следующая информация:</div><ul class="list list__ul text__xl"> <li class="list__ul--dash">Вид СМ – акция, конкурс, розыгрыш, иное.</li> <li class="list__ul--dash">Организатор СМ – ИНН, адрес регистрации.</li> <li class="list__ul--dash">Оператор, партнер СМ (при наличии) — ИНН, адрес регистрации.</li> <li class="list__ul--dash">Сроки проведения СМ, включая срок приема заявок, анкет, выдачи призов.</li> <li class="list__ul--dash">Участники акции.</li> <li class="list__ul--dash">Механика СМ.</li> <li class="list__ul--dash">Количество акционного товара, призов, подарков.</li> <li class="list__ul--dash">Стоимость призов, подарков.</li> <li class="list__ul--dash">Порядок поредения победителей (при наличии розыгрыша).</li> <li class="list__ul--dash">Порядок, место и сроки выдачи призов, подарков.</li> <li class="list__ul--dash">Информация о налогообложении, если стоимость призов, подарков выше 4 000 руб. (Приоритетное условие — налог платит сам победитель).</li> <li class="list__ul--dash">Информация об обработке персональных данных.</li></ul>',
                            },
                            {
                                id: '46',
                                text: 'Собери крышки Coca-Cola на 30 баллов и обменяй их на медвежонка.',
                                tagline_title: 'Слоган',
                                is_correct: 0,
                                next_block_id: [],
                                feedback_text: 'Нет, механика этой акции должна быть прописана в полных правилах ',
                                comment: '<div class="text__xl mb-magenta">Организатор СМ обязан до даты начала проведения СМ разработать, согласовать и разместить правила проведения:</div><ul class="list list__ul text__xl mb-yellow"> <li class="list__ul--dash">либо на официальном сайте СМ (при наличии);</li> <li class="list__ul--dash">либо на сайте ТС;</li> <li class="list__ul--dash">либо на отдельно созданной лэндинговой странице;</li> <li class="list__ul--dash">либо непосредственно в магазинах, участниках СМ;</li></ul><div class="text__xl mb-magenta">В правилах СМ должна быть указана следующая информация:</div><ul class="list list__ul text__xl"> <li class="list__ul--dash">Вид СМ – акция, конкурс, розыгрыш, иное.</li> <li class="list__ul--dash">Организатор СМ – ИНН, адрес регистрации.</li> <li class="list__ul--dash">Оператор, партнер СМ (при наличии) — ИНН, адрес регистрации.</li> <li class="list__ul--dash">Сроки проведения СМ, включая срок приема заявок, анкет, выдачи призов.</li> <li class="list__ul--dash">Участники акции.</li> <li class="list__ul--dash">Механика СМ.</li> <li class="list__ul--dash">Количество акционного товара, призов, подарков.</li> <li class="list__ul--dash">Стоимость призов, подарков.</li> <li class="list__ul--dash">Порядок поредения победителей (при наличии розыгрыша).</li> <li class="list__ul--dash">Порядок, место и сроки выдачи призов, подарков.</li> <li class="list__ul--dash">Информация о налогообложении, если стоимость призов, подарков выше 4 000 руб. (Приоритетное условие — налог платит сам победитель).</li> <li class="list__ul--dash">Информация об обработке персональных данных.</li></ul>',
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
                        avatar: 'user/images/avatar_women.png',
                        question: 'Привет, у нас проходит несколько акций, возьми на заметку те, к которым не нужно разрабатывать отдельные правила. <br><br>Касательно правил: организатор мероприятия до его начала должен разработать, согласовать и разместить правила проведения на выбранной им площадке. Для мероприятий с простой механикой, например, с предоставлением скидки, 2+1, можно не разрабатывать отдельные правила, а указать их на ценнике, рекламном макете и упаковке.',
                        answer_title: '',
                        speach_title: '',
                        answer_name: 'conversation_28',
                        answers: [{
                                id: '44',
                                text: 'Купи три шоколадки, а заплати за две. ',
                                tagline_title: 'Слоган',
                                is_correct: 1,
                                next_block_id: [],
                                feedback_text: 'Да, эта подойдёт, это акция с простой механикой.',
                                comment: '<div class="text__xl mb-magenta">Организатор СМ обязан до даты начала проведения СМ разработать, согласовать и разместить правила проведения:</div><ul class="list list__ul text__xl mb-yellow"> <li class="list__ul--dash">либо на официальном сайте СМ (при наличии);</li> <li class="list__ul--dash">либо на сайте ТС;</li> <li class="list__ul--dash">либо на отдельно созданной лэндинговой странице;</li> <li class="list__ul--dash">либо непосредственно в магазинах, участниках СМ;</li></ul><div class="text__xl mb-magenta">В правилах СМ должна быть указана следующая информация:</div><ul class="list list__ul text__xl"> <li class="list__ul--dash">Вид СМ – акция, конкурс, розыгрыш, иное.</li> <li class="list__ul--dash">Организатор СМ – ИНН, адрес регистрации.</li> <li class="list__ul--dash">Оператор, партнер СМ (при наличии) — ИНН, адрес регистрации.</li> <li class="list__ul--dash">Сроки проведения СМ, включая срок приема заявок, анкет, выдачи призов.</li> <li class="list__ul--dash">Участники акции.</li> <li class="list__ul--dash">Механика СМ.</li> <li class="list__ul--dash">Количество акционного товара, призов, подарков.</li> <li class="list__ul--dash">Стоимость призов, подарков.</li> <li class="list__ul--dash">Порядок поредения победителей (при наличии розыгрыша).</li> <li class="list__ul--dash">Порядок, место и сроки выдачи призов, подарков.</li> <li class="list__ul--dash">Информация о налогообложении, если стоимость призов, подарков выше 4 000 руб. (Приоритетное условие — налог платит сам победитель).</li> <li class="list__ul--dash">Информация об обработке персональных данных.</li></ul>'
                            },
                            {
                                id: '45',
                                text: 'Купи чипсы, зарегистрируй чек и получи шанс выиграть автомобиль.',
                                tagline_title: 'Слоган',
                                is_correct: 0,
                                next_block_id: [],
                                feedback_text: 'Нет, механика этой акции должна быть прописана в полных правилах ',
                                comment: '<div class="text__xl mb-magenta">Организатор СМ обязан до даты начала проведения СМ разработать, согласовать и разместить правила проведения:</div><ul class="list list__ul text__xl mb-yellow"> <li class="list__ul--dash">либо на официальном сайте СМ (при наличии);</li> <li class="list__ul--dash">либо на сайте ТС;</li> <li class="list__ul--dash">либо на отдельно созданной лэндинговой странице;</li> <li class="list__ul--dash">либо непосредственно в магазинах, участниках СМ;</li></ul><div class="text__xl mb-magenta">В правилах СМ должна быть указана следующая информация:</div><ul class="list list__ul text__xl"> <li class="list__ul--dash">Вид СМ – акция, конкурс, розыгрыш, иное.</li> <li class="list__ul--dash">Организатор СМ – ИНН, адрес регистрации.</li> <li class="list__ul--dash">Оператор, партнер СМ (при наличии) — ИНН, адрес регистрации.</li> <li class="list__ul--dash">Сроки проведения СМ, включая срок приема заявок, анкет, выдачи призов.</li> <li class="list__ul--dash">Участники акции.</li> <li class="list__ul--dash">Механика СМ.</li> <li class="list__ul--dash">Количество акционного товара, призов, подарков.</li> <li class="list__ul--dash">Стоимость призов, подарков.</li> <li class="list__ul--dash">Порядок поредения победителей (при наличии розыгрыша).</li> <li class="list__ul--dash">Порядок, место и сроки выдачи призов, подарков.</li> <li class="list__ul--dash">Информация о налогообложении, если стоимость призов, подарков выше 4 000 руб. (Приоритетное условие — налог платит сам победитель).</li> <li class="list__ul--dash">Информация об обработке персональных данных.</li></ul>',
                            },
                            {
                                id: '46',
                                text: 'Собери крышки Coca-Cola на 30 баллов и обменяй их на медвежонка.',
                                tagline_title: 'Слоган',
                                is_correct: 0,
                                next_block_id: [],
                                feedback_text: 'Нет, механика этой акции должна быть прописана в полных правилах ',
                                comment: '<div class="text__xl mb-magenta">Организатор СМ обязан до даты начала проведения СМ разработать, согласовать и разместить правила проведения:</div><ul class="list list__ul text__xl mb-yellow"> <li class="list__ul--dash">либо на официальном сайте СМ (при наличии);</li> <li class="list__ul--dash">либо на сайте ТС;</li> <li class="list__ul--dash">либо на отдельно созданной лэндинговой странице;</li> <li class="list__ul--dash">либо непосредственно в магазинах, участниках СМ;</li></ul><div class="text__xl mb-magenta">В правилах СМ должна быть указана следующая информация:</div><ul class="list list__ul text__xl"> <li class="list__ul--dash">Вид СМ – акция, конкурс, розыгрыш, иное.</li> <li class="list__ul--dash">Организатор СМ – ИНН, адрес регистрации.</li> <li class="list__ul--dash">Оператор, партнер СМ (при наличии) — ИНН, адрес регистрации.</li> <li class="list__ul--dash">Сроки проведения СМ, включая срок приема заявок, анкет, выдачи призов.</li> <li class="list__ul--dash">Участники акции.</li> <li class="list__ul--dash">Механика СМ.</li> <li class="list__ul--dash">Количество акционного товара, призов, подарков.</li> <li class="list__ul--dash">Стоимость призов, подарков.</li> <li class="list__ul--dash">Порядок поредения победителей (при наличии розыгрыша).</li> <li class="list__ul--dash">Порядок, место и сроки выдачи призов, подарков.</li> <li class="list__ul--dash">Информация о налогообложении, если стоимость призов, подарков выше 4 000 руб. (Приоритетное условие — налог платит сам победитель).</li> <li class="list__ul--dash">Информация об обработке персональных данных.</li></ul>',
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
                        is_questions: true,
                        is_response: false,
                        is_speach: false,
                        avatar: 'user/images/avatar_man_3.png',
                        question: 'Привет, от тебя был вопрос по рассылке. У нас есть два вида рассылок: рекламная и информационная. <br><br>Мы можем направлять рекламу по СМС, e-mail и через мессенджеры, если клиент дал своё согласие. А без согласия клиента — только  информацию, которую компания обязана довести в силу закона. <br><br>Выбери текст, который мы можем направить, если клиент дал своё согласие только на информационную рассылку.',
                        answer_title: '',
                        speach_title: '',
                        answer_name: 'conversation_29',
                        answers: [{
                                id: '47',
                                text: 'Ваш пароль для регистрации в программе лояльности: jdl45d.',
                                tagline_title: 'Слоган',
                                is_correct: 1,
                                next_block_id: [],
                                feedback_text: 'Да, мы можем рассылать такие сообщения, если клиент дал своё согласие на информационную рассылку.',
                                comment: '<div class="text__xl mb-magenta">Можно направлять:</div><ul class="list list__ul text__xl"> <li class="list__ul--dash">Рекламу по СМС, e-mail мессенджерам, если клиент дал свое согласие на получение такой рекламы.</li> <li class="list__ul--dash">Без согласия клиента — информацию, которую компания обязана довести в силу закона.</li> <li class="list__ul--dash">Например, коды подтверждения для регистрации в программе лояльности.</li></ul>'
                            },
                            {
                                id: '48',
                                text: 'Акция в пятерочке: балтийские шпроты за 79 руб.!',
                                tagline_title: 'Слоган',
                                is_correct: 0,
                                next_block_id: [],
                                feedback_text: 'Не лучший выбор, мы не можем рассылать такие сообщения, если клиент дал своё согласие только на информационную рассылку.',
                                comment: '<div class="text__xl mb-magenta">Можно направлять:</div><ul class="list list__ul text__xl"> <li class="list__ul--dash">Рекламу по СМС, e-mail мессенджерам, если клиент дал свое согласие на получение такой рекламы.</li> <li class="list__ul--dash">Без согласия клиента — информацию, которую компания обязана довести в силу закона.</li> <li class="list__ul--dash">Например, коды подтверждения для регистрации в программе лояльности.</li></ul>',
                            },
                            {
                                id: '49',
                                text: 'Обновление программы лояльности: регистрируйтесь сегодня и получите 300 баллов на счёт!',
                                tagline_title: 'Слоган',
                                is_correct: 0,
                                next_block_id: [],
                                feedback_text: 'Не лучший выбор, мы не можем рассылать такие сообщения, если клиент дал своё согласие только на информационную рассылку.',
                                comment: '<div class="text__xl mb-magenta">Можно направлять:</div><ul class="list list__ul text__xl"> <li class="list__ul--dash">Рекламу по СМС, e-mail мессенджерам, если клиент дал свое согласие на получение такой рекламы.</li> <li class="list__ul--dash">Без согласия клиента — информацию, которую компания обязана довести в силу закона.</li> <li class="list__ul--dash">Например, коды подтверждения для регистрации в программе лояльности.</li></ul>',
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
                        question: 'Привет, от тебя был вопрос по рассылке. У нас есть два вида рассылок: рекламная и информационная. <br><br>Мы можем направлять рекламу по СМС, e-mail и через мессенджеры, если клиент дал своё согласие. А без согласия клиента — только  информацию, которую компания обязана довести в силу закона. <br><br>Выбери текст, который мы можем направить, если клиент дал своё согласие только на информационную рассылку.',
                        answer_title: '',
                        speach_title: '',
                        answer_name: 'conversation_29',
                        answers: [{
                                id: '47',
                                text: 'Ваш пароль для регистрации в программе лояльности: jdl45d.',
                                tagline_title: 'Слоган',
                                is_correct: 1,
                                next_block_id: [],
                                feedback_text: 'Да, мы можем рассылать такие сообщения, если клиент дал своё согласие на информационную рассылку.',
                                comment: '<div class="text__xl mb-magenta">Можно направлять:</div><ul class="list list__ul text__xl"> <li class="list__ul--dash">Рекламу по СМС, e-mail мессенджерам, если клиент дал свое согласие на получение такой рекламы.</li> <li class="list__ul--dash">Без согласия клиента — информацию, которую компания обязана довести в силу закона.</li> <li class="list__ul--dash">Например, коды подтверждения для регистрации в программе лояльности.</li></ul>'
                            },
                            {
                                id: '48',
                                text: 'Акция в пятерочке: балтийские шпроты за 79 руб.!',
                                tagline_title: 'Слоган',
                                is_correct: 0,
                                next_block_id: [],
                                feedback_text: 'Не лучший выбор, мы не можем рассылать такие сообщения, если клиент дал своё согласие только на информационную рассылку.',
                                comment: '<div class="text__xl mb-magenta">Можно направлять:</div><ul class="list list__ul text__xl"> <li class="list__ul--dash">Рекламу по СМС, e-mail мессенджерам, если клиент дал свое согласие на получение такой рекламы.</li> <li class="list__ul--dash">Без согласия клиента — информацию, которую компания обязана довести в силу закона.</li> <li class="list__ul--dash">Например, коды подтверждения для регистрации в программе лояльности.</li></ul>',
                            },
                            {
                                id: '49',
                                text: 'Обновление программы лояльности: регистрируйтесь сегодня и получите 300 баллов на счёт!',
                                tagline_title: 'Слоган',
                                is_correct: 0,
                                next_block_id: [],
                                feedback_text: 'Не лучший выбор, мы не можем рассылать такие сообщения, если клиент дал своё согласие только на информационную рассылку.',
                                comment: '<div class="text__xl mb-magenta">Можно направлять:</div><ul class="list list__ul text__xl"> <li class="list__ul--dash">Рекламу по СМС, e-mail мессенджерам, если клиент дал свое согласие на получение такой рекламы.</li> <li class="list__ul--dash">Без согласия клиента — информацию, которую компания обязана довести в силу закона.</li> <li class="list__ul--dash">Например, коды подтверждения для регистрации в программе лояльности.</li></ul>',
                            }
                        ],
                        is_last: true,
                        is_default: true,
                        checked_value: ''
                    }]
                },
            ],
            checkedValues: [],
            feedbackText: '',
            isShowFeedback: false,
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
        EventBus.$on('reset-dialog-day-3', function () {
            vm.resetDialogDay3();
        });
        if (CLV.oGlobal['tablet_fourth_data']) {
            this.tabInfo = JSON.parse(CLV.oGlobal['tablet_fourth_data']);
        }
    },
    methods: {
        getAfterActive: function () {
            this.activeTab = CLJ.activeTabDay3.nRawScore;

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
                $("#TXT_50 .tablet__items-item").each(function (key, index) {
                    var active = !$(this).hasClass("active") && !$(this).hasClass("lock") && !$(this).hasClass("correct") && !$(this).hasClass("incorrect");

                    var save = 'activeStateDay3_'.concat(key + 1);

                    if (active) {
                        CLV.oGlobal[save] = 1;
                    }
                });
                --CLJ.total_activities.nRawScore;
            } else {
                $("#TXT_50 .tablet__items-item").each(function (key, index) {
                    var active = !$(this).hasClass("active") && !$(this).hasClass("lock") && !$(this).hasClass("correct") && !$(this).hasClass("incorrect");

                    var save = 'activeStateDay3_'.concat(key + 1);

                    if (active) {
                        CLV.oGlobal[save] = 2;
                    }
                });
                ++CLJ.total_activities.nRawScore;
            }

            this.isShowFeedback = false;

            //разблокировка табов
            if (this.activeTab !== this.tabInfo.length - 1) {
                this.tabInfo[this.activeTab + 1].is_lock = false;
                CLV.oGlobal['tablet_fourth_data'] = JSON.stringify(this.tabInfo);
            }

            //скрыть панель при переходе
            this.showPanel = false;

            //Переключаемся на сл. таб
            if (this.activeTab < this.tabInfo.length - 1) {
                CLJ.activeTabDay3.nRawScore = CLJ.activeTabDay3.nRawScore + 1;

                ++this.activeTab;

                this.activeTab = CLJ.activeTabDay3.nRawScore;

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
        resetDialogDay3: function () {

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