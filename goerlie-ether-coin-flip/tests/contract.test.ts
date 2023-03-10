import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { finishedCoinFlip } from "../generated/schema"
import { finishedCoinFlip as finishedCoinFlipEvent } from "../generated/Contract/Contract"
import { handlefinishedCoinFlip } from "../src/contract"
import { createfinishedCoinFlipEvent } from "./contract-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let winner = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let newfinishedCoinFlipEvent = createfinishedCoinFlipEvent(winner)
    handlefinishedCoinFlip(newfinishedCoinFlipEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("finishedCoinFlip created and stored", () => {
    assert.entityCount("finishedCoinFlip", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "finishedCoinFlip",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "winner",
      "0x0000000000000000000000000000000000000001"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
