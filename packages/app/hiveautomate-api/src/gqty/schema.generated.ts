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

export interface AutomationInput {
  name?: InputMaybe<Scalars["String"]>;
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
  Automation: {
    __typename: { __type: "String!" },
    createdAt: { __type: "DateTime" },
    edges: { __type: "[AutomationEdge]" },
    id: { __type: "ID" },
    name: { __type: "String" },
    nodes: { __type: "[AutomationNode]" },
  },
  AutomationEdge: {
    __typename: { __type: "String!" },
    from: { __type: "AutomationNode" },
    id: { __type: "ID" },
    to: { __type: "AutomationNode" },
  },
  AutomationInput: { name: { __type: "String" } },
  AutomationNode: {
    __typename: { __type: "String!" },
    id: { __type: "ID" },
    inputs: { __type: "[AutomationEdge]" },
    outputs: { __type: "[AutomationEdge]" },
  },
  AutomationTask: {
    __typename: { __type: "String!" },
    id: { __type: "ID" },
    name: { __type: "String" },
  },
  AutomationTrigger: {
    __typename: { __type: "String!" },
    id: { __type: "ID" },
    name: { __type: "String" },
  },
  HiveOrganisation: {
    __typename: { __type: "String!" },
    id: { __type: "ID!" },
  },
  HiveUser: { __typename: { __type: "String!" }, id: { __type: "ID!" } },
  mutation: {
    __typename: { __type: "String!" },
    createAutomation: {
      __type: "Automation",
      __args: { input: "AutomationInput" },
    },
    deleteAutomation: { __type: "Automation", __args: { id: "ID" } },
    updateAutomation: {
      __type: "Automation",
      __args: { id: "ID", input: "AutomationInput" },
    },
  },
  query: {
    __typename: { __type: "String!" },
    _sdl: { __type: "String!" },
    automationTasks: { __type: "[AutomationTask]" },
    automationTriggers: { __type: "[AutomationTrigger]" },
    automations: { __type: "[Automation]" },
    hash: { __type: "Hash", __args: { input: "String!" } },
  },
  subscription: {},
} as const;

export interface Automation {
  __typename?: "Automation";
  createdAt?: Maybe<ScalarsEnums["DateTime"]>;
  edges?: Maybe<Array<Maybe<AutomationEdge>>>;
  id?: Maybe<ScalarsEnums["ID"]>;
  name?: Maybe<ScalarsEnums["String"]>;
  nodes?: Maybe<Array<Maybe<AutomationNode>>>;
}

export interface AutomationEdge {
  __typename?: "AutomationEdge";
  from?: Maybe<AutomationNode>;
  id?: Maybe<ScalarsEnums["ID"]>;
  to?: Maybe<AutomationNode>;
}

export interface AutomationNode {
  __typename?: "AutomationNode";
  id?: Maybe<ScalarsEnums["ID"]>;
  inputs?: Maybe<Array<Maybe<AutomationEdge>>>;
  outputs?: Maybe<Array<Maybe<AutomationEdge>>>;
}

export interface AutomationTask {
  __typename?: "AutomationTask";
  id?: Maybe<ScalarsEnums["ID"]>;
  name?: Maybe<ScalarsEnums["String"]>;
}

export interface AutomationTrigger {
  __typename?: "AutomationTrigger";
  id?: Maybe<ScalarsEnums["ID"]>;
  name?: Maybe<ScalarsEnums["String"]>;
}

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
  createAutomation: (args?: {
    input?: Maybe<AutomationInput>;
  }) => Maybe<Automation>;
  deleteAutomation: (args?: { id?: Maybe<Scalars["ID"]> }) => Maybe<Automation>;
  updateAutomation: (args?: {
    id?: Maybe<Scalars["ID"]>;
    input?: Maybe<AutomationInput>;
  }) => Maybe<Automation>;
}

export interface Query {
  __typename?: "Query";
  _sdl: ScalarsEnums["String"];
  automationTasks?: Maybe<Array<Maybe<AutomationTask>>>;
  automationTriggers?: Maybe<Array<Maybe<AutomationTrigger>>>;
  automations?: Maybe<Array<Maybe<Automation>>>;
  hash: (args: { input: Scalars["String"] }) => Maybe<ScalarsEnums["Hash"]>;
}

export interface Subscription {
  __typename?: "Subscription";
}

export interface SchemaObjectTypes {
  Automation: Automation;
  AutomationEdge: AutomationEdge;
  AutomationNode: AutomationNode;
  AutomationTask: AutomationTask;
  AutomationTrigger: AutomationTrigger;
  HiveOrganisation: HiveOrganisation;
  HiveUser: HiveUser;
  Mutation: Mutation;
  Query: Query;
  Subscription: Subscription;
}
export type SchemaObjectTypesNames =
  | "Automation"
  | "AutomationEdge"
  | "AutomationNode"
  | "AutomationTask"
  | "AutomationTrigger"
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
