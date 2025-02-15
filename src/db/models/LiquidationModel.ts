import {Schema, model} from 'mongoose';
// declare the interface for the market
interface LiquidationM {
  marketId: string,
  obligationId: string,
  collateralNFTMint: string,
  payer: string,
  isPNFT: boolean
}
// init the schema based on interface
const liquidationSchema = new Schema<LiquidationM>({
  marketId: {
    type: String,
    required: true
  },
  obligationId: {
    type: String,
    required: true
  },
  collateralNFTMint: {
    type: String,
    required: true
  },
  payer: {
    type: String,
    required: true
  },
  isPNFT: {
    type: Boolean,
    required: true
  }
})
// create a model based on the market schema 
const LiquidationModel = model<LiquidationM>('LiquidationModel', liquidationSchema, 'liquidations');
// export model
export { LiquidationModel }