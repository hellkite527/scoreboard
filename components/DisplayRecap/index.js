import React from "react";
import DisplayStat from '../DisplayStat'

const DisplayRecap= ({stats}) => {
  return(
    <>
      <DisplayStat
        homeStat = {stats?.homeG}
        awayStat = {stats?.awayG}
        statText = {'Goals scored'}
        statMax =  {10}
        isPercentage={false}
      />
      <DisplayStat
        homeStat = {stats?.homePIM}
        awayStat = {stats?.awayPIM}
        statText = {'Penalty minutes taken'}
        statMax =  {20}
        isPercentage={false}
      />
      <DisplayStat
        homeStat = {stats?.homeFOW}
        awayStat = {stats?.awayFOW}
        statText = {'Face offs'}
        statMax =  {50}
        isPercentage={false}
      />
      <DisplayStat
        homeStat = {stats?.homeSOG}
        awayStat = {stats?.awaySOG}
        statText = {'Shots on goal'}
        statMax =  {50}
        isPercentage={false}
      />
      <DisplayStat
        homeStat = {stats?.homeSPG}
        awayStat = {stats?.awaySPG}
        statText = {'Shots that missed the goal'}
        statMax =  {20}
        isPercentage={false}
      />
      <DisplayStat
        homeStat = {stats?.homeSaves}
        awayStat = {stats?.awaySaves}
        statText = {'Saved shots by the goalkeeper'}
        statMax =  {50}
        isPercentage={false}
      />
      <DisplayStat
        homeStat = {stats?.homeGA}
        awayStat = {stats?.awayGA}
        statText = {'Goals the team let in'}
        statMax =  {10}
        isPercentage={false}
      />
      <DisplayStat
        homeStat = {Math.round(stats?.homeSavesPerShot * 100)}
        awayStat = {Math.round(stats?.awaySavesPerShot * 100)}
        statText = {'Shoots the goalkeeper saved'}
        statMax =  {100}
        isPercentage={true}
      />
      <DisplayStat
        homeStat = {Math.round(stats?.homePP_perc * 100)}
        awayStat = {Math.round(stats?.awayPP_perc * 100)}
        statText = {'Goals made during power plays'}
        statMax =  {100}
        isPercentage={true}
      />
      <DisplayStat
        homeStat = {Math.round(stats?.homeSH_perc * 100)}
        awayStat = {Math.round(stats?.awaySH_perc * 100)}
        statText = {'Short handed goals made during penalty killing'}
        statMax =  {100}
        isPercentage={true}
      />
      <DisplayStat
        homeStat = {stats?.homePPG}
        awayStat = {stats?.awayPPG}
        statText = {'Goals made during power plays'}
        statMax =  {10}
        isPercentage={false}
      />
      <DisplayStat
        homeStat = {stats?.homeSHG}
        awayStat = {stats?.awaySHG}
        statText = {'Goals the made during penalty killing'}
        statMax =  {10}
        isPercentage={false}
      />
      <DisplayStat
        homeStat = {stats?.homePPGA}
        awayStat = {stats?.awayPPGA}
        statText = {'Goals let in during penalty killing'}
        statMax =  {10}
        isPercentage={false}
      />
      <DisplayStat
        homeStat = {stats?.homeSHGA}
        awayStat = {stats?.awaySHGA}
        statText = {'Goals let in during power plays'}
        statMax =  {10}
        isPercentage={false}
      />

      <DisplayStat
        homeStat = {stats?.homeNumPP}
        awayStat = {stats?.awayNumPP}
        statText = {'Power plays'}
        statMax =  {10}
        isPercentage={false}
      />
      <DisplayStat
        homeStat = {stats?.homeNumSH}
        awayStat = {stats?.awayNumSH}
        statText = {'Penalty killing'}
        statMax =  {10}
        isPercentage={false}
      />

      <DisplayStat
        homeStat = {stats?.homeHits}
        awayStat = {stats?.awayHits}
        statText = {'Hits made'}
        statMax =  {30}
        isPercentage={false}
      />
      <DisplayStat
        homeStat = {stats?.homePPSOG}
        awayStat = {stats?.awayPPSOG}
        statText = {'Shots made during power plays'}
        statMax =  {20}
        isPercentage={false}
      />
    </>
  )
}

export default DisplayRecap