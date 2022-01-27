import Bed from '../assets/locations/bed.png';
import Bedroom from '../assets/locations/bedroom.png';
import Clocks from '../assets/locations/clocks.png';
import Closet from '../assets/locations/closet.png';
import Default from '../assets/locations/default.png';
import Fridge from '../assets/locations/fridge.png';
import Hall from '../assets/locations/hall.png';
import Kitchen from '../assets/locations/kitchen.png';
import Living_Room from '../assets/locations/living_room.png';
import Pedestal from '../assets/locations/pedestal.png';
import Plate from '../assets/locations/plate.png';
import Sofa from '../assets/locations/sofa.png';
import Table from '../assets/locations/table.png';
import Window from '../assets/locations/window.png';

export const gameStages = {
  AWAKENING: {
    image: Living_Room,
    place: 'Пол гостиной',
    narrator: `Вы проснулись на полу в темной комнате.\n
    Мельком оглядев пространство около себя, вы замечаете заколоченные намертво окна, содранные обои и беспорядок в квартире.
    Единственный источник света - мерцающая блеклым светом лампа на потолке.
    Из посторонних звуков, кроме вашего дыхания, можно услышать разве что тиканье настенных часов.
    Что будете делать?`,
    actions: [
      { text: 'Встать с пола и оглядеться', nextStage: 'LOOK_AROUND' },
      {
        text: 'Попытаться снова заснуть',
        nextStage: 'FINAL',
        visibleAfter: 3,
      },
    ],
  },

  LOOK_AROUND: {
    image: Living_Room,
    place: 'Гостиная',
    narrator:
      'Оглядев квартиру, вы замечаете, что она состоит как минимум из трёх комнат: спальня, кухня и гостиная, где вы, собственно, и находитесь.',
    actions: [
      { text: 'Изучить гостиную', nextStage: 'LIVING_ROOM', invisibleAfter: 6 },
      {
        text: 'Изучить комнаты',
        nextStage: 'KITCHEN_AND_BEDROOM_ROOMS',
        invisibleAfter: 5,
      },
      {
        text: 'Вернуться к месту пробуждения',
        nextStage: 'AWAKENING_PLACE',
        visibleAfter: 1,
      },
    ],
  },

  KITCHEN_AND_BEDROOM_ROOMS: {
    image: Hall,
    place: 'Коридор',
    narrator:
      'Вы находитесь в коридоре, разделяющий гостиную, спальню и кухню.',
    actions: [
      {
        text: 'Пойти в спальню',
        nextStage: 'BEDROOM',
        invisibleAfter: 3,
      },
      {
        text: 'Пойти на кухню',
        nextStage: 'KITCHEN',
        invisibleAfter: 4,
      },
      {
        text: 'Пойти в гостиную',
        nextStage: 'LIVING_ROOM',
      },
    ],
  },

  KITCHEN: {
    image: Kitchen,
    place: 'Кухня',
    narrator:
      'Вы находитесь на маленькой кухне. В комнате вы видите стол со скатертью в виде ромашек, грязную и пыльную плиту, а также холодильник.',
    actions: [
      { text: 'Сесть за стол', nextStage: 'TABLE' },
      { text: 'Изучить плиту', nextStage: 'PLATE' },
      { text: 'Попытаться открыть холодильник', nextStage: 'FRIDGE' },
      {
        text: 'Обратно',
        nextStage: 'KITCHEN_AND_BEDROOM_ROOMS',
      },
    ],
  },

  TABLE: {
    image: Table,
    place: 'Кухонный стол',
    narrator:
      'Сев за стол, вы резко почувствовали сильную усталость и упадок сил. Вы пытаетесь бороться с сонливостью, но отчаянно проигрываете. Вы засыпаете.',
    actions: [
      { text: 'Не сопротивляться', nextStage: 'SLEEP' },
      { text: 'Сопротивляться', nextStage: 'RESIST' },
    ],
  },

  RESIST: {
    image: Table,
    place: 'Кухонный стол',
    narrator:
      'Спустя несколько секунд, вы всё же одолеваете сонливость и встаёте из-за стола.',
    actions: [{ text: 'Далее', nextStage: 'KITCHEN' }],
  },

  PLATE: {
    image: Plate,
    place: 'Кухонная плита',
    narrator:
      'Плита как плита. Четыре конфорки, одна занята кастрюлей, а другая сковородой. Судя по содержимому, прежний хозяин квартиры хотел приготовить что-то из вьетнамской кухни. Пахнет соответствующе.',
    actions: [{ text: 'Обратно', nextStage: 'KITCHEN' }],
  },

  FRIDGE: {
    image: Fridge,
    place: 'Холодильник',
    narrator:
      'Вы пытаетесь открыть холодильник, но он не поддаётся. Вы тянете всё сильнее и сильнее за ручки. Через полминуты отчаянных усилий, дверка резко открывается и сбивает вас. Вы падаете на кухонный пол и ударяетесь головой. Рассудок ваш мутнеет, и вы чувствуете, что проваливаетесь.',
    actions: [{ text: 'Zzz', nextStage: 'AWAKENING' }],
  },

  BEDROOM: {
    image: Bedroom,
    place: 'Спальня',
    narrator:
      'Находясь в спальне, вы замечаете одноместную кровать, стоящую в центре комнаты, высокий шкаф из темного дереве и тумбу, которая находится в углу. Комнату освещает свет, доходящий с гостиной.',
    actions: [
      { text: 'Изучить кровать', nextStage: 'BED' },
      { text: 'Изучить шкаф', nextStage: 'CLOSET', invisibleAfter: 2 },
      {
        text: 'Изучить тумбу',
        nextStage: 'PEDESTAL',
        visibleAfter: 1,
      },
      {
        text: 'Обратно',
        nextStage: 'KITCHEN_AND_BEDROOM_ROOMS',
      },
    ],
  },

  CLOSET: {
    image: Closet,
    place: 'Шкаф',
    narrator:
      'Как ни странно, шкаф тоже заколочен досками. Своим телом вы чувствуете холодные потоки воздуха, которые исходят от него.',
    actions: [
      {
        text: 'Обратно',
        nextStage: 'BEDROOM',
      },
    ],
  },

  PEDESTAL: {
    image: Pedestal,
    place: 'Тумба',
    narrator: 'На пыльной тумбе вы замечаете бумажку, похожую на письмо.',
    actions: [
      {
        text: 'Прочитать письмо',
        nextStage: 'PEDESTAL_READ_LETTER',
      },
      {
        text: 'Обратно',
        nextStage: 'BEDROOM',
      },
    ],
  },

  PEDESTAL_READ_LETTER: {
    image: Pedestal,
    place: 'Тумба',
    narrator:
      '"тесен но лсымс йикобулг еелоб мет ,нос ястежак ман мыннартс еелоб меЧ"',
    actions: [
      {
        text: 'Обратно',
        nextStage: 'BEDROOM',
      },
    ],
  },

  BED: {
    image: Bed,
    place: 'Кровать',
    narrator:
      'Обычная на вид кровать. Не то чтобы дорогая, да и на вид не самая удобная. Две подушки, одеяло и наволочка. Все синего цвета с голубым оттенком, но из-за тусклого освещения кровать кажется мрачной и не располагающей к хорошему и крепкому сну.',
    actions: [
      { text: 'Попытаться лечь спать', nextStage: 'SLEEP' },
      { text: 'Залезть под кровать', nextStage: 'UNDER_BED' },
      { text: 'Обратно', nextStage: 'BEDROOM' },
    ],
  },

  UNDER_BED: {
    image: Bed,
    place: 'Кровать',
    narrator:
      'Под кроватью настолько темно, что вы не видите ничего. Свет как будто поглощается этим пространством и не возвращается назад.',
    actions: [
      { text: 'Просунуть руку', nextStage: 'HAND_UNDER_BED' },
      { text: 'Обратно', nextStage: 'BED' },
    ],
  },

  HAND_UNDER_BED: {
    image: Bed,
    place: 'Кровать',
    narrator:
      'Что-то хватает вашу руку, но спустя секунду, отпускает. Достав руку из-под кровати, вы видите на ней надпись.',
    actions: [
      { text: 'Прочитать надпись', nextStage: 'HAND_UNDER_BED_READ' },
      { text: 'Обратно', nextStage: 'BED' },
    ],
  },

  HAND_UNDER_BED_READ: {
    image: Bed,
    place: 'Кровать',
    narrator: '"?ьсолапс каК"',
    actions: [{ text: 'Обратно', nextStage: 'BED' }],
  },

  LIVING_ROOM: {
    image: Living_Room,
    place: 'Гостиная',
    narrator:
      'В гостиной вы замечаете старый диван, настенные часы и заколоченное окно.',
    actions: [
      { text: 'Изучить диван', nextStage: 'LIVING_ROOM_SOFA' },
      { text: 'Изучить настенные часы', nextStage: 'LIVING_ROOM_CLOCKS' },
      {
        text: 'Изучить окно',
        nextStage: 'LIVING_ROOM_WINDOW',
      },
      {
        text: 'Обратно',
        nextStage: 'LOOK_AROUND',
      },
    ],
  },

  LIVING_ROOM_SOFA: {
    image: Sofa,
    place: 'Диван в гостиной',
    narrator:
      'Плохо пахнущий, очень старый и разодранный диван. Явно не из Икеи, скорее с Авито.',
    actions: [
      {
        text: 'Лечь спать на диване',
        nextStage: 'SLEEP',
      },
      { text: 'Обратно', nextStage: 'LIVING_ROOM' },
    ],
  },

  SLEEP: {
    image: Default,
    place: 'Zzz',
    narrator:
      'Голова ваша становится тяжелее, веки закрываются. Вы чувствуете, что засыпаете.',
    actions: [{ text: 'Zzz', nextStage: 'AWAKENING' }],
  },

  LIVING_ROOM_CLOCKS: {
    image: Clocks,
    place: 'Настенные часы в гостиной',
    narrator:
      'Вы видите винтажные настенные часы, прибитые наспех. Замечаете, что они идут обратно. Больше ничего интересного здесь нет.',
    actions: [{ text: 'Обратно', nextStage: 'LIVING_ROOM' }],
  },

  LIVING_ROOM_WINDOW: {
    image: Window,
    place: 'Окна в гостиной',
    narrator:
      'Вы замечаете заколоченные наглухо окна, через которые еле слышно звук снаружи. Также вы замечаете одну деталь: на досках белой выцветшей краской написано что-то неразборчивое, но если приглядеться - можно попробовать прочитать. ',
    actions: [
      { text: 'Прислушаться к звуку', nextStage: 'LIVING_ROOM_WINDOW_LISTEN' },
      { text: 'Прочитать надпись', nextStage: 'LIVING_ROOM_WINDOW_READ' },
      { text: 'Обратно', nextStage: 'LIVING_ROOM' },
    ],
  },

  LIVING_ROOM_WINDOW_READ: {
    image: Window,
    place: 'Заколоченное окно',
    narrator:
      'Присмотревшись к надписи, вы видите следующие символы: ЙАВАТСВ ЕН - ЯСЬШЕНСОРП АВОНС АДГОК. Похоже, что буквы написаны задом наперёд.',
    actions: [{ text: 'Обратно', nextStage: 'LIVING_ROOM_WINDOW' }],
  },

  LIVING_ROOM_WINDOW_LISTEN: {
    image: Window,
    place: 'Заколоченное окно',

    narrator:
      'Вы слышите тихий звук струящейся воды, стекающей в какой-то резервуар. Что-то похожее вы слышали, когда гуляли в парке возле фонтанов. Но зачем на улице фонтан?',
    actions: [
      { text: 'Дурка какая-то. Обратно', nextStage: 'LIVING_ROOM_WINDOW' },
    ],
  },

  AWAKENING_PLACE: {
    image: Living_Room,
    place: 'Место пробуждения',
    narrator:
      'Вы вернулись к месту, где впервые проснулись в этой квартире. На этот раз оно не выглядит так стрёмно и неприятно.',
    actions: [
      { text: 'Лечь на этом месте', nextStage: 'FINAL' },
      { text: 'Обратно', nextStage: 'LOOK_AROUND' },
    ],
  },

  FINAL: {
    image: Default,
    place: 'Пол гостиной',
    narrator:
      'Вы легли спать в том же месте, где и проснулись. Вы чувствуете облегчение. Тело расслабляется, а ваше дыхание успокаивается. Осталось только закрыть глаза, и этот кошмар закончится.',
    actions: [{ text: 'Закрыть глаза', nextStage: 'END' }],
  },

  END: {
    image: Default,
    place: 'Лимб',
    narrator:
      'SYSTEM CALL >>> PROCEED EXPERIMENT EXIT >>> SIMULATION WAS COMPLETED',
    actions: [{ text: 'Finish testing (prepare audio)', nextStage: 'PROMO' }],
  },
};
