import { useList } from '@pankod/refine-core';
import React from 'react'
import { Typography, Box, Stack } from '@pankod/refine-mui';
import { PieChart, PropertyReferrals, TotalRevenue, PropertyCard, TopAgent } from 'components';

const Home = () => {
  const { data, isLoading, isError } = useList({
    resource: 'properties',
    config: {
      pagination: {
        pageSize: 4
      }
    }
  })
  const latestProperties = data?.data ?? [];
  if(isLoading) return <Typography>Loading...</Typography>
  if(isError) return <Typography>Something went wrong</Typography>

  return (
    <Box>
      <Typography fontSize={25} fontWeight={700} color="#11142D">
        Dashboard
      </Typography>
      <Box mt="20px" display="flex" flexWrap="wrap" gap={4}>
        <PieChart title="Properties for sale" value={684} series={[75, 25]} colors={['#125dc8','#a2a100']}/>
        <PieChart title="Properties for rent" value={550} series={[60, 40]} colors={['#125dc8','#a2a100']}/>
        <PieChart title="Total customers" value={5684} series={[75, 25]} colors={['#125dc8','#a2a100']}/>
        <PieChart title="Total for Cities" value={555} series={[75, 25]} colors={['#125dc8','#a2a100']}/>
      </Box>
      <Stack mt="25px" width="100%" direction={{ xs: 'column', lg: 'row'}} gap={4}>
        <TotalRevenue/>
        <PropertyReferrals/>
      </Stack>
      <Box flex={1} borderRadius="15px" padding="20px" bgcolor="#fcfcfc" display="flex" flexDirection="column" minWidth="100%" mt="25px">
        <Typography fontSize="18px" fontWeight={600} color="#11142d">Latest Properties</Typography>
        <Box mt={2.5} sx={{ display: 'flex', flexWrap: 'wrap', gap: 4}}>
          {latestProperties.map((property) => (
            <PropertyCard key={property._id} id={property._id} title={property.location} location={property.location} price={property.price} photo={property.photo}/>
          ))}
        </Box>
      </Box>
    </Box>
  )
}

export default Home