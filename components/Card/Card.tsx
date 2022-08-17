import Image from 'next/image'
import { FC } from 'react'

type Props = {
	data?: any
}

export const Card: FC<Props> = ({ data }) => {
	return (
		<>
			{data?.map((dataItem: any) => (
				<div className='card' key={dataItem?.assetId}>
					<Image
						src={dataItem?.logo ? dataItem?.logo : '/bitcoin-ic.png'}
						alt='product-logo'
						height={35}
						width={35}
					/>
					<h3 className='card-title'>{dataItem.name}</h3>
					{dataItem?.available === true ? (
						<span className='card-available'>available</span>
					) : (
						<span className='card-unavailable'>unavailable</span>
					)}
				</div>
			))}
		</>
	)
}
