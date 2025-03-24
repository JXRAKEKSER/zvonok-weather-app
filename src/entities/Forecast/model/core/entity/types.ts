const CONDITION = {
  CLEAR: 'CLEAR',
  PARTLY_CLOUDY: 'PARTLY_CLOUDY',
  CLOUDY: 'CLOUDY',
  OVERCAST: 'OVERCAST',
  LIGHT_RAIN: 'LIGHT_RAIN',
  RAIN: 'RAIN',
  HEAVY_RAIN: 'HEAVY_RAIN',
  SHOWERS: 'SHOWERS',
  WET_SNOW: 'WET_SNOW',
  LIGHT_SNOW: "LIGHT_SNOW",
  SNOW: "SNOW",
  SNOW_SHOWERS: "SNOW_SHOWERS",
  HAIL: "HAIL",
  THUNDERSTORM: "THUNDERSTORM",
  THUNDERSTORM_WITH_RAIN: "THUNDERSTORM_WITH_RAIN",
  THUNDERSTORM_WITH_HAIL: "THUNDERSTORM_WITH_HAIL",
  UNKNOWN: "UNKNOWN",
} as const;

type Condition = ValuesUnion<typeof CONDITION>;

const CONDTION_TO_LABELS: Record<Condition, string> = {
  [CONDITION.CLEAR]: 'ясно',
  [CONDITION.PARTLY_CLOUDY]: 'малооблачно',
  [CONDITION.CLOUDY]: 'облачно',
  [CONDITION.OVERCAST]: 'пасмурно',
  [CONDITION.LIGHT_RAIN]: 'легкий дождь',
  [CONDITION.RAIN]: 'дождь',
  [CONDITION.HEAVY_RAIN]: 'сильный дождь',
  [CONDITION.SHOWERS]: 'ливень',
  [CONDITION.WET_SNOW]: 'дождь снег',
  [CONDITION.LIGHT_SNOW]: 'легкий снег',
  [CONDITION.SNOW]: 'снег',
  [CONDITION.SNOW_SHOWERS]: 'ливень снег',
  [CONDITION.HAIL]: 'град',
  [CONDITION.THUNDERSTORM]: 'гроза',
  [CONDITION.THUNDERSTORM_WITH_RAIN]: 'гроза с дождем',
  [CONDITION.THUNDERSTORM_WITH_HAIL]: 'гроза с грозой',
  [CONDITION.UNKNOWN]: 'неизвестно',
} as const;

export { CONDITION, CONDTION_TO_LABELS };
export type { Condition };
