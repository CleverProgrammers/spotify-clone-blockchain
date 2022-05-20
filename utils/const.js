import { clusterApiUrl, PublicKey } from '@solana/web3.js'
import spotify from './spotify.json'

export const SOLANA_HOST = clusterApiUrl('devnet')

export const STABLE_POOL_PROGRAM_ID = new PublicKey(
  '5wSMdEYxSW7iB3rdE7c8yB3bqBUrVtvggjDdY5viyDLk',
)

export const STABLE_POOL_IDL = spotify
