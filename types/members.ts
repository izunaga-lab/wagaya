export interface Member {
  name: string
}

export interface Bachelor {
  third_year: Member[]
  fourth_year: Member[]
}

export interface Master {
  first_year: Member[]
  second_year: Member[]
}

export interface Members {
  bachelor: Bachelor
  master: Master
}
