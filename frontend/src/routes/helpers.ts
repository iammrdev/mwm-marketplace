type PathSchema = { [key: string]: string };

export const pathsPublic: PathSchema = {
  home: "/",
  productDetails: "/product/:idOrSlug",
};

export const pathsPrivate: PathSchema = {
  accountSettings: "/account-settings",
};

export const paths: PathSchema = {
  ...pathsPublic,
  ...pathsPrivate,
};

export const checkPathMatch = (pathname: string, paths: PathSchema) => {
  let isMatch = false;

  const allPaths = Object.keys(paths).map((key) => paths[key]);
  const pathFirstSection = pathname.split("/")[1];

  allPaths.forEach((path) => {
    if (path.slice(1) === pathFirstSection) {
      isMatch = true;
    }
  });

  return isMatch;
};
