"use client";
import { Team } from "@/gql/graphql"
import { useEffect, useState } from "react";

interface SidebarProps {
  teams : Team[]
}

export default function DesktopSidebar(props:SidebarProps){
  const [sortedTeams,setSortedTeams] = useState<Team[]>(props.teams)
  useEffect(()=>{
    console.log(props.teams);
    // sort 
    const sorted = props.teams.sort((a,b)=>{
      return b?.totalPoint as number - (a?.totalPoint as number)
    })
    setSortedTeams(sorted)
  },[])
      return(
      <div className="h-full 2xl:w-80 2xl:min-w-[20rem] w-80 min-w-[21rem] bg-primary flex flex-col justify-center gap-3 pl-8">
      {/* title */}
      <h1 className="text-white text-3xl font-semibold leading-none">
        Results <br />
        Page
      </h1>
      {/* heading */}
      <div className="flex justify-start gap-2">
        <h2 className="text-white font-semibold">Overall Results</h2>
      </div>
      {/* result */}
      <div className="w-full h-[25rem] 2xl:h-[40rem] flex flex-col gap-8">
        {/* #01 */}
        {
          sortedTeams.map((team,index)=>{
            console.log(team);

            if(index==4){
              return 
            }
            
            return(<div className="flex justfy-between h-1/6 w-full">
            <div className="h-full w-1/2 px-2 font-bold leading-tight pt-3 text-white">
              <h1 className="text-sm 2xl:text-base">#0{index+1}</h1>
              <h1 className="text-3xl 2xl:text-5xl">{team.totalPoint}</h1>
              <div style={{background:`${team.color}`}} className="w-28 h-5 rounded-xl flex items-center justify-center">
                <h1 className="font-medium text-white text-xs px-2">
                  Team {team.name}
                </h1>
              </div>
            </div>
            <div className="h-full w-1/2 flex flex-col items-start justify-start pt-5 px-3">
              <div className="flex items-center gap-2">
                <span className="h-[5px] w-[5px] bg-green-400 rounded-full" />
                <p className="text-xs text-white">Arts : {team.totalPoint}</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-[5px] w-[5px] bg-blue-400 rounded-full" />
                <p className="text-xs text-white">Sports : {team.totalSportsPoint}</p>
              </div>
            </div>
          </div>)
          })
        }
        
      </div>
    </div>
    )
}