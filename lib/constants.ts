export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || 'AIO Mart'
export const APP_SLOGAN =
  process.env.NEXT_PUBLIC_APP_SOLOGAN || 'Spend less, enjoy more'
export const APP_DESCRIPTION =
  process.env.NEXT_PUBLIC_APP_DESCRIPTION ||
  'AIO Mart is an e-commerce platform that provides a wide range of products for all your needs.'
export const PAGE_SIZE = Number(process.env.PAGE_SIZE || 9)

export const FREE_SHIPPING_MIN_PRICE = Number(
  process.env.FREE_SHIPPING_MIN_PRICE || 35
)
export const APP_COPYRIGHT =
  process.env.NEXT_PUBLIC_APP_COPYRIGHT ||
  `Copyright © 2025 ${APP_NAME}. All rights reserved.`
