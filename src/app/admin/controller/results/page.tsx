import Programme from "@/components/admin/programmes/Programme";
import Result from "@/components/admin/results/Result";
import {
  GetAllCategoriesDocument,
  GetAllCategoriesQuery,
  GetAllCategoriesQueryVariables,
  GetPublishedProgrammesDocument,
  GetPublishedProgrammesQuery,
  GetPublishedProgrammesQueryVariables,
  GetAllSkillsDocument,
  GetAllSkillsQuery,
  GetAllSkillsQueryVariables,
  GetAllTeamsDocument,
  GetAllTeamsQueryVariables,
  GetAllTeamsQuery,
} from "@/gql/graphql";
import { SectionIcon } from "@/icons/navs";
import { API_KEY } from "@/lib/env";
import { getUrqlClient } from "@/lib/urql";
import React from "react";

const page = async () => {
  const { client } = getUrqlClient();
  const result = await client.query<
    GetPublishedProgrammesQuery,
    GetPublishedProgrammesQueryVariables
  >(GetPublishedProgrammesDocument, {api_key : API_KEY});

  const categories = await client.query<
    GetAllCategoriesQuery,
    GetAllCategoriesQueryVariables
  >(GetAllCategoriesDocument, {api_key : API_KEY});

  const skills = await client.query<
    GetAllSkillsQuery,
    GetAllSkillsQueryVariables
  >(GetAllSkillsDocument, {api_key : API_KEY});

  const teams = await client.query<
  GetAllTeamsQuery,
  GetAllTeamsQueryVariables
>(GetAllTeamsDocument, {api_key : API_KEY});


  return (
    <main className="w-full h-full flex ">
      <Result
        key={1}
        result={
          result.data?.resultPublishedProgrammes.filter(  (programme) => {
            return programme.resultPublished === false;
          }
          )
        }
        pageProps={1}
        categories={categories.data?.categories}
        skills={skills.data?.skills}
        teams = {teams.data?.teams}
      />
    </main>
  );
};

export default page;
