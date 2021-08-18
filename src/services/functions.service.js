export const centsToBrl = (cents) => {
    cents = cents / 100;
    return cents.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
};