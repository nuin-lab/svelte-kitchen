type Image = {
  id: number;
  alt: string;
};

const imageList = [
  866, 957, 961, 971, 981, 987, 992, 994, 1002, 1016, 1019, 1021, 1032, 1037, 1041, 1043, 1050, 1055, 1063, 1067,
];

export function getAllImages(): Image[] {
  return imageList.map((imageId) => ({ id: imageId, alt: 'Sample image from Lorem Picsum' }));
}

export function getImage(id: number): Image | undefined {
  const imageId = imageList.at(id);

  return imageId ? { id: imageId, alt: 'Sample image from Lorem Picsum' } : undefined;
}
