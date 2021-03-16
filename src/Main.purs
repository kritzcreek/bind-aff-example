module Main where

import Prelude

import Data.Either (Either(..))
import Effect (Effect)
import Effect.Aff (Aff, launchAff_, try)
import Effect.Aff.Compat (EffectFnAff, fromEffectFnAff)
import Effect.Class.Console as Console

foreign import data O :: Type

foreign import oToAffImpl :: O -> EffectFnAff String

oToAff :: O -> Aff String
oToAff o = fromEffectFnAff (oToAffImpl o)

entry :: O -> Effect Unit
entry o = launchAff_ do
  s <- try (oToAff o)
  case s of
    Right s' -> Console.log ("Succeeded: " <> s')
    Left err -> Console.log "Errored"
