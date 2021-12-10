type TActive = {
  code: "active";
  title: "Активный";
}

type TBlocked = {
  title: 'Заблокирован';
  code: 'blocked'
}

type TFired = {
  title: 'Уволенный';
  code: 'fired';
}

type TInactive = {
  title: 'Не активный';
  code: 'not_active'
}

type TEconomy = {
  title: 'Эконом';
  code: 'econom';
}

type TStandard = {
  title: 'Стандарт';
  code: 'standart';
}

type TBusiness = {
  title: 'Бизнесс';
  code: 'bussiness';
}

type TEco = {
  title: 'Эко';
  code: 'eco';
}

export type TDriverStatus = TActive | TBlocked | TFired | TInactive;

export type TCarStatus = TEconomy | TEco | TBusiness | TStandard;

export type TDriver = {
  id: number;
  first_name: string;
  last_name: string;
  date_created: number;
  date_birth: number;
  status: TDriverStatus;
}

export type TCar = {
  id: number;
  mark: string;
  model: string;
  number: string;
  status: TCarStatus;
  year: number;
}
