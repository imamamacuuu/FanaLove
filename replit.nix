{ pkgs }: {
    deps = [
        pkgs.yarn
        pkgs.nodejs
        pkgs.nodePackages.typescript
        pkgs.ffmpeg
        pkgs.imagemagick
        pkgs.git
    ];
}