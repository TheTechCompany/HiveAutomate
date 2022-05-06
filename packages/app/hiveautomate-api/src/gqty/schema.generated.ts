/**
 * GQTY AUTO-GENERATED CODE: PLEASE DO NOT MODIFY MANUALLY
 */

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: string;
  Hash: any;
}

export const scalarsEnumsHash: import("gqty").ScalarsEnumsHash = {
  Boolean: true,
  Date: true,
  DateTime: true,
  Hash: true,
  ID: true,
  String: true,
};
export const generatedSchema = {
  HiveOrganisation: {
    __typename: { __type: "String!" },
    id: { __type: "ID!" },
  },
  HiveUser: { __typename: { __type: "String!" }, id: { __type: "ID!" } },
  mutation: {},
  query: {
    __typename: { __type: "String!" },
    _sdl: { __type: "String!" },
    hash: { __type: "Hash", __args: { input: "String!" } },
  },
  subscription: {},
} as const;

export interface HiveOrganisation {
  __typename?: "HiveOrganisation";
  id: ScalarsEnums["ID"];
}

export interface HiveUser {
  __typename?: "HiveUser";
  id: ScalarsEnums["ID"];
}

export interface Mutation {
  __typename?: "Mutation";
}

export interface Query {
  __typename?: "Query";
  _sdl: ScalarsEnums["String"];
  hash: (args: { input: Scalars["String"] }) => Maybe<ScalarsEnums["Hash"]>;
}

export interface Subscription {
  __typename?: "Subscription";
}

export interface SchemaObjectTypes {
  HiveOrganisation: HiveOrganisation;
  HiveUser: HiveUser;
  Mutation: Mutation;
  Query: Query;
  Subscription: Subscription;
}
export type SchemaObjectTypesNames =
  | "HiveOrganisation"
  | "HiveUser"
  | "Mutation"
  | "Query"
  | "Subscription";

export interface GeneratedSchema {
  query: Query;
  mutation: Mutation;
  subscription: Subscription;
}

export type MakeNullable<T> = {
  [K in keyof T]: T[K] | undefined;
};

export interface ScalarsEnums extends MakeNullable<Scalars> {}
