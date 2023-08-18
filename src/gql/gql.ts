/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "query GetAllCategories {\n  categories {\n    id\n    name\n    updatedAt\n  }\n}\n\nquery GetOneCategory($id: Int!) {\n  category(id: $id) {\n    id\n    name\n    section {\n      id\n      name\n    }\n    updatedAt\n  }\n}\n\nmutation AddCategory($name: String!, $section: String!) {\n  createCategory(createCategoryInput: {name: $name, section: $section}) {\n    id\n    name\n    section {\n      name\n    }\n  }\n}\n\nmutation EditCategory($id: Int!, $name: String!, $section: String!) {\n  updateCategory(updateCategoryInput: {id: $id, name: $name, section: $section}) {\n    id\n    name\n    section {\n      name\n    }\n  }\n}\n\nmutation DeleteCategory($id: Int!) {\n  removeCategory(id: $id) {\n    id\n    name\n  }\n}": types.GetAllCategoriesDocument,
    "mutation LoginUser($username: String!, $password: String!) {\n  login(username: $username, password: $password) {\n    admin {\n      username\n      id\n      roles\n      categories {\n        id\n        name\n      }\n      team {\n        id\n        name\n      }\n    }\n    token\n  }\n}\n\nquery CheckLoggedIn {\n  checkLoggedIn {\n    username\n    id\n    roles\n    categories {\n      id\n      name\n    }\n    team {\n      id\n      name\n    }\n  }\n}\n\nquery GetAdmins {\n  sections {\n    id\n    name\n  }\n}": types.LoginUserDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetAllCategories {\n  categories {\n    id\n    name\n    updatedAt\n  }\n}\n\nquery GetOneCategory($id: Int!) {\n  category(id: $id) {\n    id\n    name\n    section {\n      id\n      name\n    }\n    updatedAt\n  }\n}\n\nmutation AddCategory($name: String!, $section: String!) {\n  createCategory(createCategoryInput: {name: $name, section: $section}) {\n    id\n    name\n    section {\n      name\n    }\n  }\n}\n\nmutation EditCategory($id: Int!, $name: String!, $section: String!) {\n  updateCategory(updateCategoryInput: {id: $id, name: $name, section: $section}) {\n    id\n    name\n    section {\n      name\n    }\n  }\n}\n\nmutation DeleteCategory($id: Int!) {\n  removeCategory(id: $id) {\n    id\n    name\n  }\n}"): (typeof documents)["query GetAllCategories {\n  categories {\n    id\n    name\n    updatedAt\n  }\n}\n\nquery GetOneCategory($id: Int!) {\n  category(id: $id) {\n    id\n    name\n    section {\n      id\n      name\n    }\n    updatedAt\n  }\n}\n\nmutation AddCategory($name: String!, $section: String!) {\n  createCategory(createCategoryInput: {name: $name, section: $section}) {\n    id\n    name\n    section {\n      name\n    }\n  }\n}\n\nmutation EditCategory($id: Int!, $name: String!, $section: String!) {\n  updateCategory(updateCategoryInput: {id: $id, name: $name, section: $section}) {\n    id\n    name\n    section {\n      name\n    }\n  }\n}\n\nmutation DeleteCategory($id: Int!) {\n  removeCategory(id: $id) {\n    id\n    name\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation LoginUser($username: String!, $password: String!) {\n  login(username: $username, password: $password) {\n    admin {\n      username\n      id\n      roles\n      categories {\n        id\n        name\n      }\n      team {\n        id\n        name\n      }\n    }\n    token\n  }\n}\n\nquery CheckLoggedIn {\n  checkLoggedIn {\n    username\n    id\n    roles\n    categories {\n      id\n      name\n    }\n    team {\n      id\n      name\n    }\n  }\n}\n\nquery GetAdmins {\n  sections {\n    id\n    name\n  }\n}"): (typeof documents)["mutation LoginUser($username: String!, $password: String!) {\n  login(username: $username, password: $password) {\n    admin {\n      username\n      id\n      roles\n      categories {\n        id\n        name\n      }\n      team {\n        id\n        name\n      }\n    }\n    token\n  }\n}\n\nquery CheckLoggedIn {\n  checkLoggedIn {\n    username\n    id\n    roles\n    categories {\n      id\n      name\n    }\n    team {\n      id\n      name\n    }\n  }\n}\n\nquery GetAdmins {\n  sections {\n    id\n    name\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;