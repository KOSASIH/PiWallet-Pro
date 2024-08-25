import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { AssetService } from '../services/AssetService';

const Asset = ({ asset }) => {
  const [assetData, setAssetData] = useState(asset);

  const handleAssetDetails = async () => {
    const assetDetails = await AssetService.getAssetDetails(assetData.id);
    setAssetData(assetDetails);
  };

  return (
    <View>
      <Text>{assetData.name}</Text>
      <Text>{assetData.symbol}</Text>
      <Text>{assetData.balance}</Text>
      <TouchableOpacity onPress={handleAssetDetails}>
        <Text>View Details</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Asset;
