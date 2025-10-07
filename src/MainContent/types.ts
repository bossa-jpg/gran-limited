type currency = "USD" | "EUR";

export interface AppTradingAccount {
	type: "AppTradingAccount";
	id: string;
	balance: number;
	currency: currency;
}

interface ChartsData {
	timestamp: number;
	value: number;
}

export interface ChartsProps {
	data: ChartsData[];
}

export interface StandardTradingAccount {
	type: "StandardTradingAccount";
	id: string;
	active: boolean;
	demo: boolean;
	equity: number;
	currency: currency;
	leverage: number;
	data: ChartsData[];
}

export type TradingAccount = AppTradingAccount | StandardTradingAccount;

export interface AccountCardProps {
	account: TradingAccount;
}

export interface AddAccountCardProps {
	activeAccountsCount: number;
	onAddClick: () => void;
}
