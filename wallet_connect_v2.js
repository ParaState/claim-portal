window.process = {}
window.process['env'] = {}
window.process.env.NODE_ENV = "production"

import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
  WagmiCore,
  WagmiCoreChains,
  WagmiCoreConnectors
} from 'https://unpkg.com/@web3modal/ethereum'

import { Web3Modal } from 'https://unpkg.com/@web3modal/html'
// import { } from 'https://unpkg.com/@walletconnect/web3wallet'

const { getAccount, getContract } = WagmiCore

// Equivalent to importing from @wagmi/core
const { configureChains, createConfig } = WagmiCore

// Equivalent to importing from @wagmi/core/chains
const { mainnet, polygon, avalanche, arbitrum } = WagmiCoreChains

// Equivalent to importing from @wagmi/core/providers
const { CoinbaseWalletConnector } = WagmiCoreConnectors

const chains = [mainnet]
const projectId = 'ceb00fce7d12e20062ef228e4a234d02'

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })])
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains }),
  publicClient
})
const ethereumClient = new EthereumClient(wagmiConfig, chains)
const web3modal = new Web3Modal({ projectId }, ethereumClient)

// document.getElementById('connect-button').addEventListener('click', () => {
//   web3modal.openModal()
// })

// document.getElementById('test-button').addEventListener('click', () => {
//   console.log( getAccount() )
// })

export const connector_modal = web3modal

export const get_account = getAccount

export const eth_client = ethereumClient

export const provider = w3mProvider

export const v2 = WagmiCore