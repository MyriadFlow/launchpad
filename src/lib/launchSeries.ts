export const inputLabel = (type: string) => {
    switch (type) {
      case 'signature':
        return 'Enter Signature Series name';
      case 'fusion':
        return 'Enter Fusion Series name';
      case 'eternal':
        return 'Enter Eternal Soul name';
      case 'phygital':
        return 'Enter Phygital Collection name';
      case 'eternum':
        return 'Enter Eternum name';
      case 'instagen':
        return 'Enter Instagen name';
      default:
        return '';
    }
  };

  export const secondInputLabel = (type: string) => {
    switch (type) {
      case 'signature':
        return 'Signature Series Symbol';
      case 'fusion':
        return 'Fusion Series Symbol';
      case 'eternal':
        return 'Eternal Soul Symbol';
      case 'phygital':
        return 'Enter Phygital Symbol';
      case 'eternum':
        return 'Eternum Symbol';
      case 'instagen':
        return 'Instagen Symbol';
      default:
        return 'Enter TradeHub fee';
    }
  };