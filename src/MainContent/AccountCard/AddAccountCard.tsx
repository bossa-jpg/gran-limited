import AddIcon from "@mui/icons-material/Add";
import { Card, CardContent, Typography } from "@mui/material";
import type { AddAccountCardProps } from "../types";

export const AddAccountCard: React.FC<AddAccountCardProps> = ({
	activeAccountsCount,
	onAddClick,
}) => {
	const maxAccounts = 5;
	const canAddNewAccount = activeAccountsCount < maxAccounts;

	const handleClick = () => {
		if (canAddNewAccount) {
			onAddClick();
		}
	};

	return (
		<Card
			sx={{
				minWidth: 300,
				minHeight: 200,
				maxWidth: 300,
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				cursor: canAddNewAccount ? "pointer" : "default",
				opacity: canAddNewAccount ? 1 : 0.6,
			}}
			onClick={handleClick}
		>
			<CardContent sx={{ textAlign: "center" }}>
				<AddIcon
					sx={{
						fontSize: 48,
						color: canAddNewAccount ? "primary.main" : "text.disabled",
					}}
				/>
				<Typography
					variant="h6"
					color={canAddNewAccount ? "primary.main" : "text.disabled"}
				>
					Добавить счет
				</Typography>

				{!canAddNewAccount && (
					<Typography
						variant="body2"
						color="error"
						sx={{ mt: 1, fontSize: "0.75rem" }}
					>
						Максимум {maxAccounts} активных счетов
					</Typography>
				)}
			</CardContent>
		</Card>
	);
};
