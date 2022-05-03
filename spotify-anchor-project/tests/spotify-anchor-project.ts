import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { SpotifyAnchorProject } from "../target/types/spotify_anchor_project";

describe("spotify-anchor-project", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.SpotifyAnchorProject as Program<SpotifyAnchorProject>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);
  });
});
