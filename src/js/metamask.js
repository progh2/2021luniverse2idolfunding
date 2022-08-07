import MetaMaskOnboarding from '@metamask/onboarding';
import { ethers } from 'ethers';
import { Config } from "@/js/config";

const currentUrl = new URL(window.location.href);
const forwarderOrigin =
    currentUrl.hostname === 'localhost' ? 'http://localhost:9010' : undefined;

const { isMetaMaskInstalled } = MetaMaskOnboarding;

export let account = '0x0';
export let chainId = '0x0';

export const initialize = async () => {
    const network = Config.nft.network;

    // check metamask installed
    if (!isMetaMaskInstalled()) {
        return false;
    }

    try {
        new ethers.providers.Web3Provider(window.ethereum, 'any');

        new MetaMaskOnboarding({ forwarderOrigin });

        const _accounts = await ethereum.request({
            method: 'eth_accounts',
        });
        account = _accounts[0] || '0x0';
        if (account === '0x0') {
            const newAccounts = await ethereum.request({
                method: 'eth_requestAccounts',
            });
            account = newAccounts[0];
        }

        await ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [
                {
                    chainId: network.chainId,
                    rpcUrls: network.rpcUrls,
                    chainName: network.chainName,
                    nativeCurrency: network.nativeCurrency,
                    blockExplorerUrls: network.blockExplorerUrls,
                }
            ]
        });

        await ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [
                {
                    chainId: network.chainId,
                },
            ],
        });

        chainId = await ethereum.request({
            method: 'eth_chainId',
        });
    } catch (err) {
        account = '0x0';
        chainId = '0x0';

        // eslint-disable-next-line no-console
        console.error(err);
    }
    return true;
}
