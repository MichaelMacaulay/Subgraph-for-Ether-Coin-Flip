import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  finishedCoinFlip,
  startedCoinfFlip
} from "../generated/Contract/Contract"

export function createfinishedCoinFlipEvent(winner: Address): finishedCoinFlip {
  let finishedCoinFlipEvent = changetype<finishedCoinFlip>(newMockEvent())

  finishedCoinFlipEvent.parameters = new Array()

  finishedCoinFlipEvent.parameters.push(
    new ethereum.EventParam("winner", ethereum.Value.fromAddress(winner))
  )

  return finishedCoinFlipEvent
}

export function createstartedCoinfFlipEvent(
  theCoinFlipID: BigInt
): startedCoinfFlip {
  let startedCoinfFlipEvent = changetype<startedCoinfFlip>(newMockEvent())

  startedCoinfFlipEvent.parameters = new Array()

  startedCoinfFlipEvent.parameters.push(
    new ethereum.EventParam(
      "theCoinFlipID",
      ethereum.Value.fromUnsignedBigInt(theCoinFlipID)
    )
  )

  return startedCoinfFlipEvent
}
