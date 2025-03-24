import { CONDITION, CONDTION_TO_LABELS, type Condition } from "./types";

class ForecastEntity {
  public temperature: Temperature;
  public humidity: Humidity;
  public windSpeed: WindSpeed;
  public condition: Condition;

  /**
   * Принадлежность к городу
   */
  public city: City;
  /**
   * Дата и время на которое измерения актуальны
   */
  public dateTime: Date;
  public hour: Nullable<number>;

  public static CONDITION = CONDITION;
  /**
   * Структура, сопоставляющая значения погодных условий с их русским эквивалентом 
   */
  public static CONDTION_TO_LABELS = CONDTION_TO_LABELS;
  public static DAY_PARTS_LITERALS = {
    MORNING: "утро",
    DAY: "день",
    EVENING: "вечер",
    NIGHT: "ночь",
  } as const;

  constructor({
    temperature,
    humidity,
    windSpeed,
    condition,
    city,
    dateTime,
    hour,
  }: ForecastEntity) {
    this.temperature = temperature;
    this.humidity = humidity;
    this.windSpeed = windSpeed;
    this.condition = condition;
    this.city = city;
    this.dateTime = dateTime;
    this.hour = hour;
  }

  public get dayPart(): string {
    if (!this.hour) {
      return "";
    }

    switch (true) {
      case this.hour <= 5:
        return ForecastEntity.DAY_PARTS_LITERALS.NIGHT;
      case this.hour <= 11:
        return ForecastEntity.DAY_PARTS_LITERALS.MORNING;
      case this.hour <= 18:
        return ForecastEntity.DAY_PARTS_LITERALS.DAY;
      default:
        return ForecastEntity.DAY_PARTS_LITERALS.EVENING;
    }
  }
}

export default ForecastEntity;
